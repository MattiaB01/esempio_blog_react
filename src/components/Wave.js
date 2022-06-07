import React from "react"


import Wave from 'react-wavify'

const wave=() =>
{


    return(

<div>
<div className="fixed bottom-5">
<Wave fill='#E3FDFD'
        paused={false}
        options={{
          height: 50,
          amplitude:50,
          speed: 0.4,
          points: 3,
          opacity:100,
        }}
        ></Wave>

        
        </div>
</div>
    )};

export default wave;