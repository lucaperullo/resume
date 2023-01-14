async function signup(email: string, password: string,name:string,surname:string) {
    try {
      const response = await fetch('http://localhost:2024/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password,name,surname }),
      });
      console.log(response)
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export default signup;