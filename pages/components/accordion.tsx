import React, { SetStateAction, useState } from 'react'
import { AccordionContainer, FlexColumn } from '../../components/common/Common'
import Accordion from '../../components/molecules/Accordion/Accordion';

export default function AccordionPage() {
    const [isActive, setIsActive] = useState(false);

    return (
        <AccordionContainer>
            <FlexColumn>
                <Accordion title="accordion" text="Lorem kdlkgflk" isActive={isActive} setIsActive={setIsActive} />
            </FlexColumn>
        </AccordionContainer>
    )
}
