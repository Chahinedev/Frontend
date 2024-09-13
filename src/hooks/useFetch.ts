const useFetch = () => {
  const baseUrl = 'http://localhost:3000';  // Changez avec l'URL de votre API si nécessaire

  const get = async (endpoint: string) => {
    const response = await fetch(`${baseUrl}${endpoint}`);
    return response.json();
  };

  const post = async (endpoint: string, body: any) => {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  const put = async (endpoint: string, body: any) => {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  const del = async (endpoint: string) => {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'DELETE',
    });
    return response.json();
  };

  return { get, post, put, delete: del };
};

export default useFetch;
