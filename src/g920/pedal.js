import React from 'react';

import flatstore from 'flatstore';
function Pedal(props) {

    let [axisValue] = flatstore.useWatch(props.id);

    let currentPos = props.downAmount * axisValue * -1;

    let wheelStyle = {
        width: '70px',
        position: 'absolute',
        top: props.top + 'px',
        left: props.left + 'px',
        transform: 'translateY(' + currentPos + 'px)'
    };

    return (
        <img alt="" style={wheelStyle} src={props.src} />
    )

}

export default Pedal;