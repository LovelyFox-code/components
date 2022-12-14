import React from 'react'
import { PaginatorBox } from '../../common/Common'

interface IIgnobalProps {
    pages: number[],
    isActive: number,
    setIsActive: React.Dispatch<React.SetStateAction<number>>

}
const Ignobal: React.FC<IIgnobalProps> = (props) => {
    const handleClick = (page: number) => {
        props.setIsActive(page);
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
export default Ignobal
