import React from 'react'
import { Button } from 'react-bootstrap'

const CustumBtn = ({ lien, children }) => {
    return (
        <Button href={lien}
            target="_blank"
            bg='dark'
            variant="light"
        >{children}</Button>
    )
}

export default CustumBtn