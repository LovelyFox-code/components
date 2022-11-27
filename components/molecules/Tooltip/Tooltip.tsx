import React from 'react'
import styled from 'styled-components';
import { Box, Container, TooltipBox, TTooltipPosition } from '../../common/Common'

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  
`
interface ITooltipProps {
    positions: TTooltipPosition[],
    isClicked: string,
    setIsClicked: React.Dispatch<React.SetStateAction<string>>

}
const Tooltip: React.FC<ITooltipProps> = (props) => {
    const handleClick = (position: string) => {
        props.setIsClicked(position);
        console.log(position);

    };
    return (
        <>
            {props.positions.map(position => <TooltipContainer>
                <Container onClick={() => handleClick(position)}><Box>Tooltip</Box></Container>
                {props.isClicked === position ? <TooltipBox variant={position}>Some advise</TooltipBox> : ""}
            </TooltipContainer>)}
        </>
    )
}
export default Tooltip
