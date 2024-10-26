// pages/create-gif.js
import React, { useEffect, useState } from 'react';
import gifshot from 'gifshot';

const CreateGif = () => {
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    const imageUrls = [
      '/images/1.png', // 替换为您的 PNG 图片路径
      '/images/2.png',
      '/images/3.png'
    ];

    gifshot.createGIF(
      {
        images: imageUrls,
        interval: 0.5, // 每帧之间的间隔，单位为秒
        gifWidth: 400, // GIF 的宽度
        gifHeight: 400, // GIF 的高度
        numFrames: imageUrls.length, // 帧数
      },
      function (obj) {
        if (!obj.error) {
          setGifUrl(obj.image); // 设置生成的 GIF URL
        } else {
          console.error('生成 GIF 时出错:', obj.error);
        }
      }
    );
  }, []);

  return (
    <div>
      <h1>合成的 GIF</h1>
      {gifUrl ? (
        <img src={gifUrl} alt="Generated GIF" />
      ) : (
        <p>正在生成 GIF，请稍候...</p>
      )}
    </div>
  );
};

export default CreateGif;
