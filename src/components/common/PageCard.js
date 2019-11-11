import React from 'react';

const PageCard = ({
    cardTitle,
    children,
    onButtonPress,
    buttonIcon,
    buttonText,
    noFooter
}) => {
    const btnIcon = buttonIcon || 'plus-circle';
    return (
        <div className="card my-2 mx-1 rounded-0 shadow ">
            <div className="card-header">
                <h4>{cardTitle}</h4>
            </div> {/* end of card header */}
            <div className="card-body p-2">
                <div className="row m-4">
                    {children}
                </div>
            </div>
            {
                !noFooter
                    ? <div className="card-footer text-center">
                        <button className="btn btn-info" onSubmit={onButtonPress}><i className={`fas fa-${btnIcon}`}></i> &nbsp;{buttonText || `Save`} </button>
                    </div>
                    : null
            }
        </div>
    )
}

export { PageCard };