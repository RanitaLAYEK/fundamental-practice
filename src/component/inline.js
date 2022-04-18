import React from 'react'


const heading ={
    fontSize:'72px',
    color:'blue'
}
function Inline() {

  return (
    <div>
      <h1 className='error'>Error</h1>
      {/*<h1 className={styles.sucess}>Sucess</h1>*/}
    
    <div style={heading}>inline</div>

    </div>
  )
}

export default Inline