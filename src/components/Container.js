import React from 'react'

const Container = (props) => {

    return (<div style={{

    
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }}>
        {props.children}
    </div>
    )
}



export default Container