import React, { useState } from 'react'
import { Box, Container } from '../../components/common/Common'

const pages = [1, 2, 3, 4, 5];

export default function Paginator() {
    const [isActive, setIsActive] = useState(3);
    // number, string, boolean, {}, [], null, undefind
    const handleClick = (page: number) => {
        setIsActive(page);

    };
    return (
        <Container>
            {pages.map(page => <Box key={page} onClick={() => handleClick(page)} style={{
                backgroundColor: isActive === page ? 'salmon' : '',
                color: isActive === page ? 'white' : '',
            }}
            >{page}</Box>)}
        </Container>
    )
}
