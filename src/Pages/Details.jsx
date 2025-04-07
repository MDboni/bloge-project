import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom';
import Loader from '../Component/Loader';
import { postDetails } from '../ApiRequest/ApiRequest';
import BlogDetails from '../Component/BlogeDatils';

const Details = () => {

  let {postID} = useParams()
  
    let [list,SetList]=useState(null);
  
 useEffect(()=>{
    (async ()=>{
        let res= await postDetails(postID);
        SetList(res);
    })()
},[postID])
  return (
    
    <Layout>
      {list===null?<Loader/>:<BlogDetails list={list} />}
    </Layout>
  )
}

export default Details