addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  var _0x43b4b=(163047^163046)+(697514^697519);let isDarkMode=false;_0x43b4b="hdmiod".split("").reverse().join("");let lastNotificationTime=901416^901416;let _0xd540c;const phone="\u0031\u0038\u0037\u0037\u0036\u0036\u0036\u0037\u0037\u0037\u0031";_0xd540c=(222833^222836)+(933084^933077);const wxpusherAppToken="\u0041\u0054\u005F\u0035\u0055\u0054\u0066\u0047\u0071\u006A\u0070\u004D\u0048\u0078\u0055\u0077\u0059\u006F\u0055\u0073\u0057\u0047\u0058\u0075\u0034\u0042\u0055\u0058\u0057\u0044\u0062\u0063\u0068\u0071\u005A";let _0xb14bb;const wxpusherUIDs=["BzQIMWwe43rxnieM4nPlr3FT8axF_DIU".split("").reverse().join("")];_0xb14bb=(991473^991481)+(323888^323888);
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>通知桂R·A2333车主挪车</title>
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          line-height: 1.6;
          background-color: #49828b;
          color: #333;
        }
  
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
  
        h1 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 24px;
        }
  
        .message-area {
          margin-bottom: 20px;
        }
  
        textarea {
          width: 100%;
          height: 120px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          resize: none;
          font-size: 16px;
          margin-bottom: 5px;
        }
  
        .char-count {
          text-align: right;
          color: #666;
          font-size: 14px;
          margin-bottom: 10px;
        }
  
        .templates {
          margin-bottom: 20px;
        }
  
        .template-btn {
          background: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 8px 15px;
          margin: 0 5px 5px 0;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }
  
        .template-btn:hover {
          background: #e9ecef;
        }
  
        .action-buttons {
          display: flex;
          gap: 10px;
        }
  
        button {
          width: 100%;
          padding: 15px;
          margin: 10px 0;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }
  
        .notify-btn {
          background: #28a745;
        }
  
        .notify-btn:hover {
          background: #218838;
        }
  
        .call-btn {
          background: #17a2b8;
        }
  
        .call-btn:hover {
          background: #138496;
        }
  
        /* 模态框样式 */
        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
  
        .modal-content {
          position: relative;
          background-color: white;
          margin: 20% auto;
          padding: 20px;
          width: 90%;
          max-width: 400px;
          border-radius: 10px;
          text-align: center;
        }
  
        .modal-title {
          margin-bottom: 15px;
          font-size: 18px;
          color: #2c3e50;
        }
  
        .modal-phone {
          font-size: 24px;
          color: #007bff;
          margin-bottom: 20px;
        }
  
        .modal-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
  
        .modal-btn {
          padding: 8px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }
  
        .confirm-btn {
          background: #28a745;
          color: white;
        }
  
        .confirm-btn:hover {
          background: #218838; 
        }
  
        .cancel-btn {
          background: #dc3545;
          color: white;
        }
  
        .cancel-btn:hover {
          background: #c82333;
        }
        </style>
      </head>
      <body>
      <div class="container">
        <div style=" display: flex;align-items: center;justify-content: center;flex-wrap: nowrap;">
        <font color=#ED0012>通</font><font color=#DB0024>知</font><font color=#C90036>桂</font><font color=#B70048>R</font><font color=#A5005A>·</font><font color=#93006C>A</font><font color=#81007E>2</font><font color=#6F0090>3</font><font color=#5D00A2>3</font><font color=#4B00B4>3</font><font color=#3900C6>车</font><font color=#2700D8>主</font><font color=#1500EA>挪</font><font color=#0300FC>车</font>
      </div>
			<div class="message-area">
				<textarea id="messageInput" placeholder="请输入微信通知内容"
					οninput="updateCharCount()">您好，有人需要您挪车，请及时处理。</textarea>
				<div id="tips" style="color: #FF0000; font-size: 1rem;">可自行编辑微信通知消息，带来不便，请您见谅</div>
				<div id="charCount" class="char-count">0/200</div>
			</div>
			<p>通知车主，请点击以下按钮</p>
			<button class="notify-btn" onclick="notifyOwner()">微信推送通知车主挪车</button>
        <button class="call-btn" onclick="callOwner()">拨打车主电话</button><center><BR><div>电话没回应？发个短信试试：<a href="sms:18776667771?body=麻烦挪个车"class="f-manaul">点击发送</a></div><BR><div><a href="https://beian.miit.gov.cn/" rel="nofollow" target="_blank">桂ICP备号2022006211号-2</a></div>
        </div></center>
		</div>

    

        <script>
        updateCharCount();
          function notifyOwner() {
            const messageInput = document.getElementById('messageInput');
            fetch("https://wxpusher.zjiecode.com/api/send/message", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                appToken: "${wxpusherAppToken}",
                content:  messageInput.value.trim(),
                contentType: 1,
                uids: ${JSON.stringify(wxpusherUIDs)}
              })
            })
            .then(response => response.json())
            .then(data => {
              if (data.code === 1000) {
                alert("通知已发送！请等待车主到来");
              } else {
                alert("发送失败，请稍后重试。");
              }
            })
            .catch(error => {
              console.error("Error sending notification:", error);
              alert("发送出错，请检查网络连接。");
            });
          }
          function callOwner() {
            window.location.href = "tel:${phone}";
          }
          function updateCharCount() {
            const messageInput = document.getElementById('messageInput');
            const charCount = document.getElementById('charCount');
            const notifyBtn = document.getElementsByClassName('notify-btn');
            const currentLength = messageInput.value.length;
    
            charCount.textContent = currentLength + '/200';
            if (currentLength > 200) {
              charCount.style.color = '#dc3545';
            } else {
              charCount.style.color = '#666';
            }
          }
        </script> 
      </body>
    </html>
  `

  return new Response(htmlContent, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' },
  })
}