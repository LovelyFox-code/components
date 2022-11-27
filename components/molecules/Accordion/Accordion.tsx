import React from 'react'
import { AccordionBox } from '../../common/Common'
import { H1 } from '../../Typography/Typography';

interface IAccordionProps {
    title: string,
    text: string,
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,


}
const Accordion: React.FC<IAccordionProps> = (props) => {
    const handleClick = () => {
        props.setIsActive(!props.isActive);
    };
    return (
        <>

            <AccordionBox onClick={() => handleClick()}><H1>{props.title}</H1><div>more</div></AccordionBox>
            {props.isActive ? <AccordionBox><p>{props.text}</p></AccordionBox> : null}

        </>
    )
}
export default Accordion

