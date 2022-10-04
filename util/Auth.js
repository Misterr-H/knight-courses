const ISSERVER = typeof window === 'undefined';

export const Login = (username, token) => {
    if(!ISSERVER) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
    }
}

export const Logout = () => {
    if(!ISSERVER) {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }
}

export const IsLoggedIn = () => {
    if(!ISSERVER) {
        const token = localStorage.getItem('token');
        if(token) {
            return true;
        } else {
            return false;
        }
    }
}

export const GetToken = () => {
    if(!ISSERVER) {
        return localStorage.getItem('token');
    }
}

export const GetUsername = () => {
    if(!ISSERVER) {
        return localStorage.getItem('username');
    }
}