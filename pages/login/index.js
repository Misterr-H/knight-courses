import Head from "next/head";
import {motion} from "framer-motion";
import {ButtonLoading} from "../../components/LoadingComponents";
import Link from "next/link";
import {useState} from "react";

const Login = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div>
            <Head>
                <title>Login - Knight Courses</title>
            </Head>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Log in to Knight Courses</h1>
                <div className={'flex flex-col mt-10'}>
                    <label className={'my-2'}>Username or Email</label>
                    <input placeholder={'Enter username'} type={'text'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setUsername(event.target.value);
                    }} />

                    <label className={'my-2'}>Password</label>
                    <input placeholder={'Enter password'} type={'password'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </div>
                <motion.div whileHover={{scale:1.05}} className={'mt-2'}>
                    <span className={'cursor-pointer hover:underline text-left'}>Forgot Password?</span>
                </motion.div>

                <span className={'mt-1 text-red-500'}>{error}</span>

                <motion.button whileHover={{scale:1.1}} className={'py-2 w-24 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'} onClick={() => {
                    handleSubmit();
                }}>{isLoaded ? 'Log in' : <ButtonLoading/>}</motion.button>

                <div className={'flex text-left  mt-5 '}>
                    <span className={'text-gray-700'}>New to Knight Courses?</span>
                    <Link href={'/signup'}>
                        <span className={'cursor-pointer font-semibold hover:underline ml-4'}>Sign up now</span>
                    </Link>
                </div>

            </motion.div>

        </div>
    )
}

export default Login;