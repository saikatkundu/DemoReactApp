import React from 'react'

const SelectWithSideLabel = ({
    colSize,
    labelText,
    selectedValue,
    onSelectValueChange,
    selectId,
    requiredField,
    selectValues,
    smallBox,
    largeBox,
    noBorderRad
}) => {
    let optClass = '',
        brdCls = ''
    if (smallBox) optClass = "form-control-sm"
    else if (largeBox) optClass = "form-control-lg"
    if (noBorderRad) brdCls = "rounded-0"
    return (
        <div className={colSize || "col-sm-12 col-md-12 col-lg-6"}>
            <div className="form-group row">
                <label
                    htmlFor={selectId || 'selectInput'}
                    className="col-sm-4 col-form-label font-weight-bold text-right text-capitalize"
                >{renderMandatory(requiredField)}{labelText}:</label>
                <div className="col-sm-8">
                    <select className={`form-control ${brdCls} ${optClass}`} defaultValue={selectedValue} id={selectId || "selectInput"} onChange={onSelectValueChange}>
                        {renderSelect(selectValues)}
                    </select>
                </div>
            </div>
        </div>
    )
}

const renderSelect = (selectValues) => {
    if (selectValues && selectValues.length > 0)
        return selectValues.map((val, index) => {
            return (
                <option key={index} value={val}>{val}</option>
            )
        })
    return (
        <option> -----No Data----- </option>
    )
}
const renderMandatory = (requiredField) => {
    if (requiredField)
        return (
            <i className="fas fa-star text-danger"></i>
        )
    return ''
}

export { SelectWithSideLabel }