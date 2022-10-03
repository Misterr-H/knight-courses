import Link from "next/link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";

const Navbar = ()   => {
    const [isLogged, setIsLogged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

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
                <span className={'font-bold text-2xl'}>Knight Courses</span>
            </div>
            <div className={'flex items-center justify-between'}>

                {isLogged ? (
                        <>
                            <div className={'flex items-center cursor-pointer'} onClick={handleClick}>
                                Username
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
                                {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                                <MenuItem onClick={() => {

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