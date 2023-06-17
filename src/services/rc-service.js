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
                    "Content-type": "application/json; charset=UTF-8"
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
            "userName": username,
            "password": password,
        })
        return await this.fetchRequest('authenticate', 'POST', body);
    };

    SignUp = async (username, password, email, fullName, mobile) =>
    {
        let body = JSON.stringify({
            userName: username,
            password: password,
            email: email,
            mobileNumber: mobile,
            fullName: fullName
        })
        return await this.fetchRequest('signup', 'POST', body);
    };

    GetRecipes = async () =>
    {
        return await this.fetchRequest('/api/v1/recipes', 'GET');
    };
}


