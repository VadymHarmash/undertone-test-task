import React from 'react'

export default function Empty() {
    return (
        <div style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '1'
        }}></div>
    )
}
