import { Button, Checkbox, Form, Input, Space, List, Divider } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import moment from "moment"

import { useState, createContext, useContext } from 'react';
export const DataContext = createContext();

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const editTodoList = (value) => {
        setTodoList(value)
    }
    return (
        <DataContext.Provider value={{ todoList, setTodoList }}>
            <TodoInput />
            <TodoList />
        </DataContext.Provider>
    )
}

const TodoInput = () => {
    const {setTodoList} = useContext(DataContext)
    const { TextArea } = Input
    const [form] = Form.useForm()

    const [todoContent, todoTitle] = useState('')
    const onFinish = (item) => {
        console.log('Success:', item);
        setTodoList(preValue => {
            let tempData = {
                title:item.todoTitle,
                content:item.todoContent,
                finished:false,
                time:new Date().getTime()
            }
            const uppdateData = [...preValue,tempData]
            return uppdateData
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleReset = () => {
        form.resetFields();
    };
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <Form
            name='todoInput'
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                name="todoTitle"
                label="标题"
                rules={[{
                    required: true,
                    message: '代办标题不能为空！'
                }]}
            >
                <Input
                    placeholder="代办标题"
                    value={todoTitle}
                />
            </Form.Item>
            <Form.Item
                name="todoContent"
                label="内容"
                rules={[{
                    required: true,
                    message: '代办内容不能为空！'
                }]}
            >
                <TextArea
                    placeholder="代办内容"
                    autoSize={{
                        minRows: 2,
                        maxRows: 6,
                    }}
                    value={todoContent}
                />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        添加代办
                    </Button>
                    <Button htmlType="button" onClick={handleReset}>
                        清空
                    </Button>
                </Space>
            </Form.Item>
        </Form >
    )
}

const TodoList = () => {
    const { todoList, setTodoList } = useContext(DataContext)
    const handleChangeStatus = (e) => {
        setTodoList((prevData) => {
            console.log(prevData, e.finished)
            let temp = {
                ...e,
                finished: !e.finished
            }
            let index = prevData.findIndex((item) => item.time === e.time)
            const updatedData = [...prevData]
            updatedData.splice(index, 1, temp)
            return updatedData
        })
    }
    const handleDelete = (e) => {
        setTodoList((prevData) => {
            const updatedData = [...prevData]
            let index = prevData.findIndex((item) => item.time === e.time)
            updatedData.splice(index, 1)
            return updatedData
        })
    }
    return (
        <div>
            {/* <Divider orientation="left">代办列表</Divider> */}
            <List
                itemLayout="vertical"
                size="large"
                header={<div>代办列表</div>}
                bordered
                dataSource={todoList}
                renderItem={(item) => (
                    <List.Item
                        style={{ textAlign: "left" }}
                        extra={
                            <Space>

                                <Checkbox checked={item.finished} onClick={() => handleChangeStatus(item)}></Checkbox>
                                <Button type="primary" icon={<DeleteOutlined />} size='small' onClick={() => handleDelete(item)} />
                            </Space>
                        }
                        actions={[
                            <div>{moment(item.time).format('YYYY年MM月DD日 HH:mm:ss')}</div>
                        ]}
                    >
                        <List.Item.Meta
                            title={<span>{item.title}</span>}
                            description={<div>{item.content}</div>}
                        />
                    </List.Item>
                )
                }
            />
        </div>
    )
}




export default Todo