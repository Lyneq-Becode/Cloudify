const sendMessageToUser = (content, type) => {
    const messageBox = document.getElementById('user_message');
    const messageText = document.getElementById('message_text');

    messageBox.style.visibility = 'visible';

    messageText.innerText = content;
    switch (type){
        case 'error':
            messageBox.style.backgroundColor = 'red';
            break;
        case 'success':
            messageBox.style.backgroundColor = 'green';
            break;
        case 'warning':
            messageBox.style.backgroundColor = 'orange';
            break;
        default:
            messageBox.style.backgroundColor = 'blue';
    }


    setTimeout(()=>{
        messageBox.style.visibility = 'hidden';
    }, 1000)
}

export {
    sendMessageToUser
}