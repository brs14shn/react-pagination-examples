import React from 'react'

const Pagination = ({postsPerPage,totalPages,paginate}) => {
    console.log(postsPerPage,totalPages);

    const pageNumbers=[]

    for(let i=1; i<= Math.ceil(totalPages/postsPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className='pagination d-flex justify-content-end'>
            {pageNumbers.map((number)=>(
            <>
             <li  key={number} className='page-item'>
                 <a onClick={()=>paginate(number)} className='page-link' href="!#">{number}</a>
             </li>
            </>
        
            ))}
           
            
        </ul>


    </nav>
  )
}

export default Pagination