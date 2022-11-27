
import React, { useEffect, useState } from 'react'
import { AccordionContainer, Container, FlexColumn } from '../../components/common/Common';
import Accordion from '../../components/molecules/Accordion/Accordion';
import Paginator from '../../components/molecules/Paginator/Paginator';

export default function IgnobalPage() {
    const [isActive, setIsActive] = useState(false);
    const [isDateActive, setisDateActive] = useState(2007)
    const [yearsData, setYearsData] = useState<number[]>([])
    const [prizes, setPrizes] = useState<any[]>([])
    useEffect(() => {
        async function fetchYears() {
            try {
                const response = await fetch("https://ignoble-api.onrender.com/years");
                const dates = await response.json();
                const years = dates.years;
                setYearsData(years);
            } catch (error) {
                console.log(error);

            }
        }
        fetchYears();
    }, [])

    async function fetchYearData() {
        try {
            const response = await fetch(`https://ignoble-api.onrender.com/years/${isDateActive}/prizes`);
            const result = await response.json();
            console.log(result.prizes);
            const prizes = result.prizes;
            setPrizes(prizes);
        } catch (error) {
            console.log(error);

        }
    }



    return (
        <FlexColumn>
            <Container>
                <Paginator pages={yearsData} isActive={isDateActive} setIsActive={setisDateActive} fetchYearData={fetchYearData} />
            </Container>
            {prizes.map(prize => <AccordionContainer><Accordion title={prize.category} text={prize.rationale} isActive={isActive} setIsActive={setIsActive}></Accordion></AccordionContainer>)}
        </FlexColumn>
    )
}
