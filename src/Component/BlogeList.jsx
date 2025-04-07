import React from 'react'
import { Link } from 'react-router-dom'

const BlogeList = (props) => {
  return (
    <div>
        <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-9">

                    {
                        props.list.map((item,index)=>{
                            return(
                                <Link key={index.toString()} to={"/details/"+item['id']} className="card w-100 glass">
                                <figure><img src={item['img']} alt="car!" /></figure>
                                <h2 className='card-title'>{item['title']}</h2>
                                <p>{item['short']}</p>
                           </Link>
                            )
                        })
                    }
        

                  

                </div>
            </div>
    </div>
  )
}

export default BlogeList