import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsArrowRight} from 'react-icons/bs';
import newsimg from '../../img/news.png';

const Main = () => {
const [news,setNews] = useState([]);
const getNews =async()=>{
    const urlapi="https://newsapi.org/v2/top-headlines?country=tr&apiKey=74c61ebcf19248e4bebab6db9036c8aa";      
try{
    const response = await fetch(urlapi);
    const data = await response.json();
    const news = await data.articles;
    setNews(data.articles[Math.floor(Math.random()*21)]);
    
    
    console.log(news);

} catch(error){
    console.log(error);
}
// fetch(urlapi).then((res)=>res.json()).then((data)=>setNews(data.articles[0]));

}
;
console.log(news);
useEffect(()=>{
    getNews();
},[]);

// const change=()=>{
//   for(let i=1;i<21;i++){
//     setNews(data.articles[i]);
// }  
// }

const {title,description,urlToImage,url} = news;

  return (
    <div className='all'>
        <div className='imgdiv'>
            <img src={newsimg} width="70rem" height="70rem" alt="" />
            <h1 className='header'>HABERLER</h1>
        </div>
            <div className='center'>
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img className="image" variant="top" width="100%"src={urlToImage}/>
                    <Card.Body >
                        <Card.Title className='cardtitle'>{title}</Card.Title>
                        <Card.Text className='desc'>
                        {description}
                        </Card.Text>
                        <div className='flex'>
                            <Button><a href={url} target="_blank" rel='noreferrer'>Haberin Devamı...</a></Button>
                            <Button variant="primary" onClick={getNews} className="nextnews"><BsArrowRight className='icons'/></Button>
                        </div>
                    </Card.Body>
                </Card>
            
            
        </div>
    </div>
  )
}

export default Main;