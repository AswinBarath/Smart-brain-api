async function testRegister() {
    try {
        const fetch = (await import('node-fetch')).default;
        
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test3@example.com',
                password: 'testpassword123',
                name: 'Test User 3'
            })
        });

        const data = await response.text();
        console.log('Status:', response.status);
        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testRegister(); 