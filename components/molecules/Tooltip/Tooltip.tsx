import React from 'react'
import styled from 'styled-components';
import { Box, Container, TooltipBox } from '../../common/Common'

export const TooltipContainer = styled.div`
  position: relative;
  width: 230px;
`
interface ITooltipProps {
    isClicked: boolean,
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>

}
const Tooltip: React.FC<ITooltipProps> = (props) => {
    const handleClick = () => {
        props.setIsClicked(!props.isClicked);
    };
    return (
        <TooltipContainer>
            <Container onClick={() => handleClick()}><Box>Tooltip</Box></Container>
            {props.isClicked ? <TooltipBox>Some advise</TooltipBox> : ""}
        </TooltipContainer>
    )
}
export default Tooltip
