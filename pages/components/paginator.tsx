import React, { useState } from 'react'
import { Box, Container } from '../../components/common/Common'

const pages = [1, 2, 3, 4, 5];

export default function Paginator() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);

    };
    return (
        <Container>
            {pages.map(page => <Box key={page} onClick={() => handleClick()} style={{
                backgroundColor: isActive ? 'salmon' : '',
                color: isActive ? 'white' : '',
            }}
            >{page}</Box>)}
        </Container>
    )
}
