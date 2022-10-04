import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

const Lectures = () => {
    const router = useRouter();
    const {id} = router.query;
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentLecture, setCurrentLecture] = useState('');

    useEffect(() => {
        async function fetchData() {
            await axios.post('/api/courses/lectures', {
                "id": id
            })
                .then(res => {
                    setLectures(res.data);
                    setCurrentLecture(res.data[0].lecture_link.split('/')[res.data[0].lecture_link.split('/').length - 1]);
                    setLoading(false);
                })
        }
        fetchData();
    }, [id])
    console.log(lectures);

    return (
        <>
            {/*<div className={'flex flex-col'}>*/}
            {/*    <div className={'flex h-20'}>*/}
            {/*        <h1>Course Progress:</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'flex flex-col md:flex-row rounded-lg border-2 p-2 border-black m-2'}>
                <div className={'flex md:w-2/3 md:h-screen'}>
                    <iframe width={'100%'} height={'70%'} src={`https://www.youtube.com/embed/${currentLecture}`}/>
                </div>
                <div className={'md:w-1/3 flex flex-col overflow-y-scroll'}>
                    {
                        lectures.map((lecture, index) => {
                            return (
                                <div key={index} className={'flex flex-row items-center justify-between p-2'}>
                                    <div className={'flex flex-row items-center'}>
                                        <div className={'w-10 h-10 rounded-full bg-gray-500 mr-2'}>

                                        </div>
                                        <div className={'flex flex-col border-b-2 border-black'}>
                                            <span onClick={() => {
                                                setCurrentLecture(lecture.lecture_link.split('/')[lecture.lecture_link.split('/').length - 1])
                                            }} className={'text-lg hover:underline cursor-pointer font-bold'}>{lecture.lecture_title}</span>
                                            {/*<span className={'text-sm'}>{lecture.description}</span>*/}
                                        </div>
                                    </div>
                                    {/*<div className={'flex flex-row items-center'}>*/}
                                    {/*    <div className={'w-10 h-10 rounded-full bg-gray-500 mr-2'}>*/}

                                    {/*    </div>*/}
                                    {/*    <div className={'flex flex-col'}>*/}
                                    {/*        <span className={'text-lg font-bold'}>{lecture.lecture_title}</span>*/}
                                    {/*        /!*<span className={'text-sm'}>{lecture.description}</span>*!/*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )


}

export default Lectures;