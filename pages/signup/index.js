import Head from "next/head";
import {Alert, AlertTitle} from "@mui/material";
import {motion} from "framer-motion";
import {ButtonLoading} from "../../components/LoadingComponents";
import Link from "next/link";
import {useState} from "react";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email");
            setIsLoading(false);
            return;
        }
        fetch("/api/accounts/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }).then(res => res.json()).then(data => {
            if(data.status === 0) {
                setError("An error occurred while creating your account. Please try again later.");
                setIsLoading(false);
            } else {
                setSuccess(true);
                setIsLoading(false);
            }
        })
    }

    return (
        <div>
            <Head>
                <title>Sign up - Knight Courses</title>
            </Head>
            <div className={'fixed top-14 left-0 right-0'}>
                {success && (
                    <Alert severity="success" variant={'filled'} onClose={() => {
                        setSuccess(false);
                    }}>
                        <AlertTitle>Success</AlertTitle>
                        You have successfully signed up. Please login to continue.
                    </Alert>
                )}
            </div>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Sign up to Knight Courses</h1>
                <div className={'flex flex-col mt-10'}>
                    <label className={'my-2'}>Username</label>
                    <input placeholder={'Enter username'} type={'text'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setUsername(event.target.value);
                    }} />

                    <label className={'my-2'}>Email</label>
                    <input placeholder={'Enter email'} type={'email'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setEmail(event.target.value);
                    }} />

                    <label className={'my-2'}>Password</label>
                    <input placeholder={'Enter password'} type={'password'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </div>
                <span className={'text-red-500'}>{error}</span>

                <motion.button whileHover={{scale:1.1}} className={'py-2 w-28 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'} onClick={handleSubmit} >
                    {isLoading ?
                        <ButtonLoading/>
                        : "Sign up"
                    }
                </motion.button>

                <div className={'flex text-left  mt-5 '}>
                    <span className={'text-gray-700'}>Been here before?</span>
                    <Link href={'/login'}>
                        <span className={'cursor-pointer font-semibold hover:underline ml-4'}>Log in</span>
                    </Link>
                </div>
            </motion.div>

        </div>
    );

}

export default Signup;