const baseURL = "https://recipe-app-service.herokuapp.com/";

export default class RCService
{
    fetchRequest = async (url, method, body,) =>
    {
        try
        {
            const response = await fetch(`${baseURL}${url}`, {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            );
            return response;
        } catch (e)
        {
            console.log(e)
        }
    }

    postAuthenticate = async (username, password) =>
    {
        let body = JSON.stringify({
            username: username,
            password: password,
        })
        return await this.fetchRequest('authenticate', 'POST', body);
    };

    SignUp = async (username, password, email, fullName, mobile) =>
    {
        let body = JSON.stringify({
            fullName: fullName,
            username: username,
            email: email,
            password: password,
            mobileNumber: mobile,
        })
        return await this.fetchRequest('signup', 'POST', body);
    };

    GetRecipes = async () =>
    {
        return await this.fetchRequest('/api/v1/recipes', 'GET');
    };
}