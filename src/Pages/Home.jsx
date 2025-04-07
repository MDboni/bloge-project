import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import BlogeList from '../Component/BlogeList'
import { postLatest } from '../ApiRequest/ApiRequest'
import Loader from './../Component/Loader';

const Home = () => {

 let [list,SetList]= useState(null)

 useEffect(()=>{

  (async ()=>{
    let res= await postLatest();
    SetList(res);
  })()

},[])

  return (
    <Layout>
        {list===null?<Loader/>:<BlogeList list={list}/>}
    </Layout>
  )
}

export default Home 