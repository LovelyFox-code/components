import React from 'react'
import { PaginatorBox } from '../../common/Common'

interface IPaginatorProps {
    pages: number[],
    isActive: number,
    setIsActive: React.Dispatch<React.SetStateAction<number>>,
    fetchYearData: () => Promise<void>,

}
const Paginator: React.FC<IPaginatorProps> = (props) => {
    const handleClick = (page: number) => {
        props.setIsActive(page);
        props.fetchYearData();
    };
    return (
        <>
            {props.pages.map(page => <PaginatorBox key={page} onClick={() => handleClick(page)} style={{
                backgroundColor: props.isActive === page ? 'salmon' : '',
                color: props.isActive === page ? 'white' : '',
            }}
            >{page}</PaginatorBox>)}
        </>
    )
}
export default Paginator
