import React from 'react'

const TextAreaWithSideLabel = ({
    colSize,
    labelText,
    textAreaId,
    requiredField,
    rowSize,
    placeholderText,
    smallBox,
    largeBox,
    noBorderRad
}) => {
    const defaultPlaceholderText = "the value"
    let optClass = '',
        brdCls = ''
    if (smallBox) optClass = "form-control-sm"
    else if (largeBox) optClass = "form-control-lg"
    if (noBorderRad) brdCls = "rounded-0"
    return (
        <div className={colSize || "col-sm-12 col-md-12 col-lg-6"}>
            <div className="form-group row">
                <label
                    htmlFor={textAreaId || 'txtAreaInput'}
                    className="col-sm-4 col-form-label font-weight-bold text-right text-capitalize"
                >{renderMandatory(requiredField)}{labelText}:</label>
                <div className="col-sm-8">
                    <textarea
                        className={`form-control ${brdCls} ${optClass}`}
                        id={textAreaId || 'txtAreaInput'} rows={rowSize || "1"}
                        placeholder={placeholderText || `Enter ${defaultPlaceholderText}`}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

const renderMandatory = (requiredField) => {
    if (requiredField)
        return (
            <i className="fas fa-star text-danger"></i>
        )
    return ''
}

export { TextAreaWithSideLabel }