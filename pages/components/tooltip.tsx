import React, { useState } from 'react'
import { TTooltipPosition } from '../../components/common/Common';
import Tooltip from '../../components/molecules/Tooltip/Tooltip'

const positions: TTooltipPosition[] = ["right", "top", "bottom"];

export default function TooltipPage() {
    const [isClicked, setIsClicked] = useState("")
    return (
        <Tooltip positions={positions} isClicked={isClicked} setIsClicked={setIsClicked} />

    )
}
