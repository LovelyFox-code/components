import React, { useState } from 'react'
import { Box, Container } from '../../components/common/Common'
import Paginator from '../../components/molecules/Paginator/Paginator';

const pages = [1, 2, 3, 4, 5];
export default function PaginatorPage() {
    const [isActive, setIsActive] = useState(3);

    return (
        <Container>
            <Paginator pages={pages} isActive={isActive} setIsActive={setIsActive} />
        </Container>
    )
}
