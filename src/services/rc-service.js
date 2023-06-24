
export default class RCService
{
    fetchRequest = async (url, method, body, token) =>
    {
        try
        {
            const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${token}`
                }
            }
            );
            return await response.json();
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

    GetRecipes = async (token) =>
    {
        // return await this.fetchRequest('api/v1/recipes', 'GET', '', token);
        try
        {
            // https://recipe-service-ixhm.onrender.com/api/v1/recipes
            // const response = await fetch(`${process.env.REACT_APP_API_URL}${'api/v1/recipes'}`, {
            const response = await fetch(`${"https://recipe-service-ixhm.onrender.com/api/v1/recipes"}`, {
                method: "GET",
                // body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            }
            );
            return await response.json();
        } catch (e)
        {
            console.log(e)
        }
    };
}
