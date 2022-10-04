import Head from "next/head";
import Action from "../components/homePageComponents/Action";
import Card from "../components/homePageComponents/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {IsLoggedIn} from "../util/Auth";

const Home = () => {
    const [courseData, setCourseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await axios.get("/api/courses/allcourses")
                .then(res => {
                    setCourseData(res.data);
                    setLoading(false);
                    console.log(res.data);
                })
        }
        fetchData();
        setIsLogged(IsLoggedIn());
    }, []);


  return (
      <>
        <Head>
            <title>Knight Courses</title>
        </Head>
          <Action/>
          <div className={'flex flex-col mt-20'}>


          {
                loading ? <div className="mx-auto text-2xl">Loading...</div> :
                courseData.map((course, index) => {
                    return <Card key={index} isLogged={isLogged} lecture={course.lectures[0].lecture_link} title={course.title} description={course.description} duration={course.duration} price={course.price} id={course._id} platform={course.author} language={course.language} />
                })
          }
          </div>
      </>
  )
}

export default Home;