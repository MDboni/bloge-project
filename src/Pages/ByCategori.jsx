import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { postByCategory } from '../ApiRequest/ApiRequest'
import Loader from '../Component/Loader'
import BlogeList from '../Component/BlogeList'

const ByCategori = () => {
  let {categoryID} = useParams()

  let [list,SetList]=useState(null);
  
  useEffect(()=>{
    (async ()=>{
        let res= await postByCategory(categoryID);
        SetList(res);
    })()
},[categoryID])

  return (
    <Layout>
      {list===null?<Loader/>:<BlogeList list={list} />}
    </Layout>
  )
}

export default ByCategori