import React, { useState } from 'react'
import { Container } from '../../components/common/Common'
import Tooltip from '../../components/molecules/Tooltip/Tooltip'

export default function TooltipPage() {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <Tooltip isClicked={isClicked} setIsClicked={setIsClicked} />

    )
}
