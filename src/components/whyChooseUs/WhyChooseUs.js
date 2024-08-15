import React from 'react'
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUsData from "../../constant/whychoosUsData/WhychoosUsData";

export default function WhyChooseUs() {
    return (
        <div className="container" id='#whyChooseUs'>
            <div className="row">
                <div className="col mt-5">
                    <div className="why_choose_us_Hadding">
                        <h1>Why Choose Us</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        {WhyChooseUsData.map((items, index) => {
                            return <WhyChooseUsCard
                                key={index}
                                icon={items.icon}
                                title={items.title}
                                paragraph={items.paragraph}
                            />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
