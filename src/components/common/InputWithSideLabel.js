import React from 'react'
import { InputBox } from './InputBox'

const InputWithSideLabel = ({
    colSize,
    labelText,
    inputValue,
    onInputValueChange,
    placeholderText,
    inputId,
    inputType,
    inputAddOn,
    addOnBefore,
    addOnIcon,
    requiredField,
    onInputBoxFocus,
    smallBox,
    largeBox,
    noBorderRad
}) => {
    return (
        <div className={colSize || "col-sm-12 col-md-12 col-lg-6"}>
            <div className="form-group row">
                <label
                    id={`${inputId}Lbl`}
                    htmlFor={inputId || 'textInput'}
                    className="col-sm-4 col-form-label font-weight-bold text-right text-capitalize"
                >{renderMandatory(requiredField)}{labelText}:</label>
                <div className="col-sm-8">
                    {renderInput(
                        labelText,
                        inputValue,
                        onInputValueChange,
                        placeholderText,
                        inputId,
                        inputType,
                        inputAddOn,
                        addOnBefore,
                        addOnIcon,
                        onInputBoxFocus,
                        smallBox,
                        largeBox,
                        noBorderRad
                    )}
                </div>
            </div>
        </div>
    )
}

const renderInput = (
    labelText,
    inputValue,
    onInputValueChange,
    placeholderText,
    inputId,
    inputType,
    inputAddOn,
    addOnBefore,
    addOnIcon,
    onInputBoxFocus,
    smallBox,
    largeBox,
    noBorderRad
) => {
    if (inputAddOn) {
        if (addOnBefore)
            return (
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className={`fa fa-${addOnIcon}`} aria-hidden="true"></i>
                        </div>
                    </div>
                    <InputBox
                        inputType={inputType}
                        inputValue={inputValue}
                        onInputValueChange={onInputValueChange}
                        inputId={inputId}
                        placeholderText={placeholderText}
                        defaultPlaceholderText={labelText}
                        onInputBoxFocus={onInputBoxFocus}
                        smallBox={smallBox}
                        largeBox={largeBox}
                        noBorderRad={noBorderRad}
                    />
                </div>
            )
        return (
            <div className="input-group mb-2 mr-sm-2">
                <InputBox
                    inputType={inputType}
                    inputValue={inputValue}
                    onInputValueChange={onInputValueChange}
                    inputId={inputId}
                    placeholderText={placeholderText}
                    defaultPlaceholderText={labelText}
                    onInputBoxFocus={onInputBoxFocus}
                    smallBox={smallBox}
                    largeBox={largeBox}
                    noBorderRad={noBorderRad}
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                        <i className={`fa fa-${addOnIcon}`} aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <InputBox
            inputType={inputType}
            inputValue={inputValue}
            onInputValueChange={onInputValueChange}
            inputId={inputId}
            placeholderText={placeholderText}
            defaultPlaceholderText={labelText}
            onInputBoxFocus={onInputBoxFocus}
            smallBox={smallBox}
            largeBox={largeBox}
            noBorderRad={noBorderRad}
        />
    )
}

const renderMandatory = (requiredField) => {
    if (requiredField)
        return (
            <i className="fas fa-star text-danger"></i>
        )
    return ''
}

export { InputWithSideLabel } 