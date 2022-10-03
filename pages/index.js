import Head from "next/head";
import Action from "../components/homePageComponents/Action";
import Card from "../components/homePageComponents/Card";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            await axios.get("https://jsonlink.io/api/extract?url=https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL")
                .then(res => {
                    setTitle(res.data.title);
                    setDescription(res.data.description);
                    setImage(res.data.images[0]);
                    setUrl(res.data.url);
                })
        }
        fetchData();
    }, []);


  return (
      <>
        <Head>
            <title>Knight Courses</title>
        </Head>
          <Action/>
          <Card title={title} image={image} description={description} />
      </>
  )
}

export default Home;