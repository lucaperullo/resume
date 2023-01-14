async function login(email: string, password: string) {
    try {
      const response = await fetch('http://localhost:2024/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
     
      return  response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export default login;