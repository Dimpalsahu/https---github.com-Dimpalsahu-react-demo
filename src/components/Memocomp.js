import React from 'react'

function Memocomp({name}) {
    console.log('Renderring memo copponent')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memocomp)
