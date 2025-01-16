document.getElementsByName('create')[0].addEventListener('click',function(){
    window.location.href="/frontend/third_page(create an account)/index.html";
});

document.getElementsByName('login')[0].addEventListener('click',function(){
    window.location.href="/frontend/fourth_page/index.html";
});

document.querySelector('.login-button').addEventListener('click', async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Login successful:', result.token); 
            localStorage.setItem('token', result.token); 
            window.location.href = '/frontend/domain_page.html';
        } else {
            alert(result.error || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
