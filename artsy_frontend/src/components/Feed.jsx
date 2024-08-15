import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
//to find out what r the corrently passed parameters
import {client} from '../client';
import MasonryLayout from'./MasonryLayout';
import { feedQuery, searchQuery } from '../utils/data';
// import  from './Spinner';



const Feed = () => {
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();

  const [pins, setPins] = useState()
  

//query to fetch category posts or all posts together
  useEffect(() => {
    setLoading(true);

    if(categoryId){//if searching posts from specific category
      const query = searchQuery(categoryId);
      client.fetch(query)
      .then((data)=>{
        setPins(data);  
        setLoading(false);
      })
    }
    else{//seaching generally
      client.fetch(feedQuery)
      .then((data)=>{
        setPins(data);
        setLoading(false)
      })
    }
    
  }, [categoryId])
  
  // if(loading)
  //  return  <Spinner message="we are adding new ideas to ur feed!"/>
  
  return (
    <div>Feed</div>
  )
}

export default Feed