import { useState } from "react"

export const useAuth = () => 
{
    const [authError,setAuthError] = useState(null);

    const login = async (loginDto) => 
        {
            const url = "http://localhost:5176/api/User/login"
            try {
                    await fetch(url,{
                        method:'POST',
                        body:JSON.stringify(loginDto),
                        headers: {
                            'Content-Type': 'application/json'
                            },
                    }).then(async (response)=> {
                        if(response.status != 200){
                          const error = await response.text()
                          setAuthError(error)
                          return 
                        }
                        
                        const token = await response.text()
                        
                        localStorage.setItem('token',token)
                    })
            } catch (error) {
                setAuthError(error.message)
            }
        }
    
    const logout = () => {
        try {
            localStorage.removeItem("token");
        } catch (error) {
            console.error(error.message);
        }
    }

    const isAuthorized = () => {
        const token = localStorage.getItem('token')
        if(token == '' || token == null) return false

        return true
    }
    return {authError,login,logout,isAuthorized}
}