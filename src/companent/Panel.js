import React from 'react'
import "./Panel.css";

function Panel() {
  return (
    <>
        <div class="box1">
           <h1 class="title">Search For College,Fee,Campus & More...</h1>
            <div class="box2">
               <div class="course">
                <div class="search"><i class="fa-solid fa-book"></i></div>
                <p>Select Course</p>
                <div class="location"><i class="fa-solid fa-sort-down"></i></div>
               </div>

             <div class="course">
                 <div class="search"><i class="fa-solid fa-location-dot"></i></div>
                <p>Select City</p>
                <div class="location"><i class="fa-solid fa-sort-down"></i></div>
             </div>

             <div class="course">
                 <div class="search"><i class="fa-solid fa-magnifying-glass"></i></div>
                <p>Search College</p>
                <div class="location"><i class="fa-solid fa-sort-down"></i></div>
             </div>
           </div> 


           <div class="course-section">

<div class="box3">
    <div class="container3">
         <div class="row text-center">
            <div class="col-4">
               <div class="college1"><i class="fa-solid fa-building-columns"></i></div>
              <p class="student"><b>Colleges</b></p>
              <p class="p1">Reference Site About Ipsum,Giving Information On Its</p>
            </div>

            <div class="col-4">
                <div class="exams"><i class="fa-solid fa-book-open-reader"></i></div>
              <p class="student"><b>Exams</b></p>
              <p>Reference Site About Ipsum,Giving Information On Its</p>
            </div>

            <div class="col-4">
                 <div class="course1"><i class="fa-solid fa-book"></i></div>
                <p class="student"><b>Courses</b></p>
               <p>Reference Site About Ipsum,Giving Information On Its</p>
            </div>

            <div class="col-4">
                <div class="review"><i class="fa-solid fa-receipt"></i></div>
               <p class="student"><b>Reviews</b></p>
               <p>Reference Site About Ipsum,Giving Information On Its</p>
            </div>
        </div>
    </div>
</div>
</div>



       </div>


      
    </>
  )
}

export default Panel