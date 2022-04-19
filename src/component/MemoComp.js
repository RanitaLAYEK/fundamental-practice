import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Components')
  return (
    <div>Memo
        {name}
    </div>
  )
}

//export default MemoComp

export default React.memo(MemoComp)