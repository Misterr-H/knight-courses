import { useRouter } from "next/router";
import {TitleCard} from "../../components/coursePageComponents/TitleCard";
import {DescriptionCard} from "../../components/coursePageComponents/DescriptionCard";
import {InfoCard} from "../../components/coursePageComponents/InfoCard";
import TitleCardMobile
    from "../../components/coursePageComponents/smallScreenComponents/TitleCardMobile";
import InfoCardMobile from "../../components/coursePageComponents/smallScreenComponents/InfoCardMobile";
import ReviewsMobile from "../../components/coursePageComponents/smallScreenComponents/ReviewsMobile";
import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import {NextSeo} from "next-seo";
import {GetUsername} from "../../util/Auth";



export default function CoursePage({course}) {
    const router = useRouter();
    const { slug } = router.query;
    const {image} = router.query;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [platform, setPlatform] = useState("");
    const [language, setLanguage] = useState("");
    const [certificate, setCertificate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(5);
    const [link, setLink] = useState("");
    const [desc, setDesc] = useState("");
    const [id, setId] = useState("");
    const [enrolled, setEnrolled] = useState(false);


    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`/api/courses/getcoursedetails`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: slug,
                })
            });
            const data = await res.json();
            console.log(data);
            setId(data._id);
            setTitle(data.title);
            setPrice(data.price);
            setPlatform(data.author);
            setLanguage(data.language);
            setCertificate(data.certificate);
            // setRating(data.rating);
            setLink(data.link);
            setDesc(data.description);
            setId(data._id);
            setLoading(false);
            setEnrolled(data.enrolls.length > 0 && data.enrolls.includes(GetUsername()));
        }
        fetchData();
    }, [])


    return (
        <>
            {/*<NextSeo*/}
            {/*    title={`Knight Courses - ${course.name}`}*/}
            {/*    description={course.description}*/}
            {/*    openGraph={{*/}
            {/*        title: course.name,*/}
            {/*        description: course.description,*/}
            {/*        images: [*/}
            {/*            {*/}
            {/*                url: course.image,*/}
            {/*                width: 800,*/}
            {/*                height: 600,*/}
            {/*                alt: 'Og Image Alt',*/}

            {/*            },*/}
            {/*            { url: course.image },*/}
            {/*            { url: course.image },*/}
            {/*        ],*/}
            {/*    }}/>*/}
            {loading ?
        (
        <div className={'flex justify-center items-center w-full h-screen bg-gray-500'}>
            <div className={'bg-white p-5 rounded-lg border-gray-200 border-2'}>
                <Box alignItems="center" justifyContent="center"><CircularProgress /></Box>
            </div>
        </div>
    ) : (


        <div className={'bg-grey'}>
            <div className={'lg:px-20 flex md:flex-row flex-col pt-20'}>
                 {/*This is for Bigger Screens */}
                <div className={'hidden md:flex flex-col w-2/3'}>
                    <TitleCard title={title} platform={platform} rating={rating} />
                    <DescriptionCard className={'mt-5'} desc = {desc} />
                </div>
                <div className={'hidden md:flex flex-col w-1/3 ml-5'}>
                    <InfoCard
                        image={image}
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Available'}
                        enrolled={enrolled}
                        id={id}
                       // link={link}
                    />
                </div>


                 {/*This is for Smaller Screens*/}
                <div className={'flex md:hidden flex-col'}>

                    
                    

                        <TitleCardMobile
                        title={title}
                        platform={platform}
                        rating={rating}
                        image={image}
                        // link={link}
                        desc = {desc}
                        enrolled={enrolled}
                        id={id}
                    />
                    {/*<NavigationCard/>*/}
                    <InfoCardMobile
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Available'}
                    />
                    {/*<RelatedCoursesMobile/>*/}
                    {/*<ReviewsMobile id={slug}/>*/}
                    {/*<BottomButton/>*/}
                </div>

            </div>
        </div>
    )}
        </>)
}