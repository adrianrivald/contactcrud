import React from 'react'
import './SubmitButton.scss'

interface SubmitButtonProps {
    value: string,
    handleSubmit: (e:any) => void;
}

const SubmitButton = (Props: SubmitButtonProps) => {
    const {value, handleSubmit } = Props

    return (
        <div className="submit">
            <button className="submit-button" onClick={handleSubmit}>{value}</button>
        </div>
    )
}

export default SubmitButton;