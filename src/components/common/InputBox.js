import React from 'react'

const InputBox = ({
    inputType,
    inputValue,
    onInputValueChange,
    inputId,
    placeholderText,
    defaultPlaceholderText,
    onInputBoxFocus,
    smallBox,
    largeBox,
    noBorderRad
}) => {
    let optClass = '',
        brdCls = ''
    if (smallBox) optClass = "form-control-sm"
    else if (largeBox) optClass = "form-control-lg"
    if (noBorderRad) brdCls = "rounded-0"
    if (!defaultPlaceholderText)
        defaultPlaceholderText = "the value"
    return (
        <input
            type={inputType || 'text'}
            value={inputValue}
            onChange={onInputValueChange}
            className={`form-control ${brdCls} ${optClass}`} id={inputId || 'textInput'}
            placeholder={placeholderText || `Enter ${defaultPlaceholderText}`}
            onFocus={onInputBoxFocus}
        ></input>
    )
}

export { InputBox }