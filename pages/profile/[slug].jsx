import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import {EditProfileChip} from "../../components/ActionChip";
import SettingsIcon from '@mui/icons-material/Settings';
import {motion} from "framer-motion";
import ProfileCard from "../../components/profilePageComponents/ProfileCard";
import {useEffect, useState} from "react";



export default function ProfilePage({user, username}) {
    const router = useRouter();
    const { slug } = router.query;
    const [userName, setUserName] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);




    return (
        <div className={'bg-gray'}>
            <ProfileCard
                loading={loading}
                data={data}
                image={''}
                name={'Neesham'}
                username={userName}
                posts={'1'}
                followers={'593'}
                following={'463'}
                bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . Duis aute icaorum.'}
            />
        </div>
    )
}
