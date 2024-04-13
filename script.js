document.getElementById('startGame').addEventListener('click', function() {
    const roomId = generateRoomId();
    document.getElementById('roomIdDisplay').textContent = `遊戲房號是：${roomId}`;
    document.getElementById('popup_start').style.display = 'block';
});

document.getElementById('enterRoom').addEventListener('click', function() {
    document.getElementById('popup_room').style.display = 'block';
});

// 获取所有的关闭按钮
const closeButtons = document.querySelectorAll('.close-btn');

// 为每个关闭按钮添加点击事件
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 假设每个关闭按钮的直接父级是弹窗内容，其父级是弹窗本身
        // 这样我们可以通过按钮找到并隐藏对应的弹窗
        this.parentElement.parentElement.style.display = 'none';
    });
});



document.getElementById('copyRoomId').addEventListener('click', function() {
    const roomId = document.getElementById('roomIdDisplay').textContent.split('：')[1];
    navigator.clipboard.writeText(roomId).then(() => {
        alert('已複製房號');
    });
});


function generateRoomId() {
    // 生成一个10位的随机数作为房号
    return Math.floor(Math.random() * 10000000000).toString();
}


// 添加处理发送房号的逻辑（这可能需要进一步的实现，例如使用邮件API或社交媒体API）
document.getElementById('sendRoomId').addEventListener('click', function() {
    // 这里可以添加发送房号的代码
    alert('分享房號功能還沒有做');
});

document.getElementById('send_room_id').addEventListener('click', function() {
    const roomId = document.getElementById('room_id').value;
    // 确保输入的房号是有效的，比如长度为10位
    if(roomId.length === 10) {
        // 重定向到带有房号的URL
        window.location.href = `https://hodala.yhccindy.com/${roomId}`;
    } else {
        // 如果房号不符合预期，可以提示用户
        alert('房號應為10碼數字');
    }

    // 清除輸入框內的數字
    durationInput.value = '';
});



// 跳轉到choose_game.html
document.getElementById('send_room_id').addEventListener('click', function() {
    window.location.href = 'choose_game.html';
});

