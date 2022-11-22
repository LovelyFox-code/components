import React from 'react'
import { AccordionBox, Box } from '../../common/Common'
import { H1 } from '../../Typography/Typography';

interface IAccordionProps {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>

}
const Accordion: React.FC<IAccordionProps> = (props) => {
    const handleClick = () => {
        props.setIsActive(!props.isActive);
    };
    return (
        <>
            <AccordionBox onClick={() => handleClick()}><H1>accordion</H1><div>more</div></AccordionBox>
            {props.isActive ? <AccordionBox><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta cupiditate totam, voluptas distinctio dolorem non, voluptates, ab reprehenderit atque deserunt ut perspiciatis eum libero ex quos nisi! Laboriosam, hic.</p></AccordionBox> : null}
        </>
    )
}
export default Accordion

