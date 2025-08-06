function readData() {
    let first_Name = document.getElementById('firstname').value;
    let last_name = document.getElementById('lastname').value;
    let user_email = document.getElementById('email').value;
    let user_phone = document.getElementById('phone').value;
    let user_message = document.getElementById('message').value;
    let subject = document.getElementById('subject').value;

    const userData = {
        firstName: first_Name,
        lastName: last_name,
        userEmail: user_email,
        userPhone: user_phone,
        userMessage: user_message,
        Subject: subject
    }

    localStorage.setItem('UserInformation',JSON.stringify(userData))

    const localData = localStorage.getItem('UserInformation')
    const userInfo = localData ? JSON.parse(localData) : '';
    console.log("userInfo",userInfo)
}
