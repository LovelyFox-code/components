import React, { useState } from 'react'
import { AccordionContainer, Box, Container, FlexColumn } from '../../components/common/Common'
import Accordion from '../../components/molecules/Accordion/Accordion';
import { H1 } from '../../components/Typography/Typography'

export default function AccordionPage() {
    const [isActive, setIsActive] = useState(false);

    return (
        <AccordionContainer>
            <FlexColumn>
                <Accordion isActive={isActive} setIsActive={setIsActive} />
            </FlexColumn>
        </AccordionContainer>
    )
}
