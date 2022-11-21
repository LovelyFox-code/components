import React, { useState } from 'react'
import { Box, Container, FlexColumn } from '../../components/common/Common'
import { H1 } from '../../components/Typography/Typography'

export default function Accordion() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <Container>
            <FlexColumn>
                <Box onClick={() => handleClick()}><H1>accordion</H1><div>more</div></Box>
                {isActive ? <Box><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta cupiditate totam, voluptas distinctio dolorem non, voluptates, ab reprehenderit atque deserunt ut perspiciatis eum libero ex quos nisi! Laboriosam, hic.</p></Box> : null}
            </FlexColumn>
        </Container>
    )
}
