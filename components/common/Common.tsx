import styled from 'styled-components'

export const Section = styled.section`
    margin: 5% 0;
`
export const Container = styled.div`
    border: 1px solid grey;
    display: flex;
    width: fit-content;
    border-radius: 5px;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
`
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`
export const Box = styled.div`
    padding: 10px 15px;
    border-right: 1px solid grey;
    &:last-child{
        border-right: none;
    }
    &:hover{
        background-color: #ffa07a71;
    }
`