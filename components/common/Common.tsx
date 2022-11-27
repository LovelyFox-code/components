import styled, { css } from 'styled-components'

export const Section = styled.section`
    margin: 5% 0;
`
export const Container = styled.div`
    border: 1px solid grey;
    display: flex;
    width: fit-content;
    border-radius: 5px;
    height: fit-content;
    flex-wrap: wrap;
`
export const AccordionContainer = styled(Container)`
    width: 100%;
    display: block;
`
export const Row = styled.div`
    display: flex;
    gap: 10%;
`
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`
export const Box = styled.div`
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:hover{
        background-color: #ffa07a71;
        visibility: visible;
    }
`
export const PaginatorBox = styled(Box)`
    /* border-right: 1px solid grey; */
    &:last-child{
        border-right: none;
    }
`
export const AccordionBox = styled(Box)`
    width: 100%;
    
`
export type TTooltipPosition = "right" | "top" | "bottom"
interface ITooltipBoxProps {
    variant?: TTooltipPosition
}
export const TooltipBox = styled(Box) <ITooltipBoxProps>`
    display: flex;
    width: fit-content;
    border-radius: 5px;
    position:absolute;
    background-color: black;
    color: #fff;
    text-align: center;
    z-index: 1;
    ${(props) => {
        if (props.variant === "right") {
            return css`
            top: 1px;
            right: 10px;
          `
        } if (props.variant === "top") {
            return css`
            top: -65px;
          `
        } if (props.variant === "bottom") {
            return css`
            bottom: -65px;
          `
        }
    }};
    `