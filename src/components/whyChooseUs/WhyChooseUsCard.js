import React from 'react'
export default function WhyChooseUsCard(props) {
    return (
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="why_choose_us_card">
                        <div className="card " >
                            <div className='iconDiv mt-2'>
                                <i className={props.icon}></i>
                            </div>
                            <h5 className='display-linebreak'>{props.title}</h5>
                            <p className='w_c_us_paragraph'>{props.paragraph}</p>
                        </div>
                    </div>
                </div>
    )
}
