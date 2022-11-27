import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export const IDComic = () => {
  const {id}=useParams();
  const [itemComic,setItem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=80dfed77f24f958fd4470b46a09a8b9e&hash=193b6884626d38741587cced90b83d35`)
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    <>
    {
      (!itemComic)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${itemComic.thumbnail.path}.${itemComic.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{itemComic.title}</h1>
            <h4>{itemComic.description}</h4>
          </div>
        </div>
      )
    }
    </>
  )
}
