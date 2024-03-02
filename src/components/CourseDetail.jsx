import React from 'react'
import { useParams } from 'react-router-dom'
function CourseDetail() {
    const {id} =useParams();
  return (
    <div>
      <h1> I am math section {id}</h1>
    </div>
  )
}

export default CourseDetail
