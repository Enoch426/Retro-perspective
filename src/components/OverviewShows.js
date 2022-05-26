import React from "react";
import './OverviewShows.css';
import Box from "./Box";




class OverviewShows extends React.Component {
    render() {
      return (
        <div>
            <div className="box">

                <p className="title">{this.props.Title}</p>
               <Box
               showimage="https://www.tvguide.com/a/img/catalog/provider/1/1/1-9006171376.jpg"
               showName="Friends"
               description1="Six young men and women live in the same apartment complex and face life and love together in Manhattan, New York City."
               showLink=""
               showLinkName="View More"
               />
               

               <Box
               showimage="https://m.media-amazon.com/images/M/MV5BOGUxOWQ4MzAtMmJjYS00M2U5LWEwZTAtYTc1YmZhNjg2NDRlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg"
               showName="Fresh prince"
               description1="A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion."
               showLink=""
               showLinkName="View More"
               />

               <Box
               showimage="https://m.media-amazon.com/images/M/MV5BNmZmOGM2ZGMtNzc1Yi00NWVjLTlhZjktZDQ2MzFkOWVlODk1XkEyXkFqcGdeQXVyMjczOTU2NTI@._V1_.jpg"
               showName="Sister Sister"
               description1="Tia and Tamera are twins who were separated at birth, with each being adopted by a different parent."
               showLink=""
               showLinkName="View More"
               />

               <Box
               showimage="https://m.media-amazon.com/images/M/MV5BZmM1OTU0ZDgtYzExNC00ODJkLWI2NGMtODgyOGJjMzg3NTBmXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg"
               showName="Family Matters"
               description1="The Winslow family deals with various misadventures, many of them caused by their pesky next-door neighbor, ultra-nerd Steve Urkel."
               showLink=""
               showLinkName="View More "
               />

               <Box
               showimage="https://m.media-amazon.com/images/M/MV5BN2RkZGE0MjAtZGVkOS00MzVhLTg0OWItZTc4OGRjOTQ1ZTM4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
               showName="That 70's Show"
               description1="A comedy revolving around a group of teenage friends, their mishaps, and their coming of age, set in 1970s Wisconsin."
               showLink=""
               showLinkName="View More"
               />





              

            </div>
        
          
        </div>
      )
    }
  }
  export default OverviewShows;