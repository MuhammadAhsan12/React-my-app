import React from 'react';
import { Link } from 'react-router-dom';
// import Services from '../Manu/Services'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          {/* <Services src = {props.src}/> */}
        </Link>
      </li>
    </>
  );
}

// export const CardItem1 = props => {
//   return(
//     <div>
//       <img src = {props.src}/>
//       {console.log(props.src)}
//     </div>
//   )
// }

export default CardItem;