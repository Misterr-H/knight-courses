import Link from "next/link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useEffect, useState} from "react";
import {GetUsername, IsLoggedIn, Logout} from "../util/Auth";
import {useRouter} from "next/router";

const Navbar = ()   => {
    const router = useRouter();

    const [isLogged, setIsLogged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        setIsLogged(IsLoggedIn());
        setUsername(GetUsername());
    }, [])

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={'flex justify-between items-center py-5 md:px-10 px-2 bg-black text-white'}>
            <div className={'flex items-center'}>
                <span onClick={() => {
                    router.push('/');
                }} className={'cursor-pointer hover:scale-105 duration-200 font-bold text-2xl'}>Knight Courses</span>
            </div>
            <div className={'flex items-center justify-between'}>

                {isLogged ? (
                        <>
                            <div className={'flex items-center cursor-pointer'} onClick={handleClick}>
                                {username}
                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => {
                                    router.push('/profile');
                                }}>My Dashboard</MenuItem>
                                <MenuItem onClick={() => {
                                    Logout();
                                    router.push('/');
                                }}>Logout</MenuItem>
                            </Menu>
                        </>

                    ) :
                    isLoaded ? (
                        <>
                            <Link href={'/login'}>
                                <span className={'cursor-pointer font-semibold hover:underline mr-4'}>Login</span>
                            </Link>
                            <Link href={'/signup'}>
                                <span className={'cursor-pointer font-semibold hover:underline mr-4'}>Signup</span>
                            </Link>
                        </>
                    ) : (
                        ''
                    )

                }


            </div>
        </div>
    );
}

export default Navbar;