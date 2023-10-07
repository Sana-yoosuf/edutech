import React from 'react'
import './Plans.css'

function Plans() {

    const pricingData = [
        {
            title: 'Strategy',
            desc: 'The success of any business ultimately comes down to the marketing strategy used. The same goes for digital marketing. A well-planned strategy keeps your brand consistent and connected to your specific audience and we build it for you!.',
            color: '#fff',
            features: [
                'Market Research',
                ' Brainstorming',
                'Competitive Analysis',
                'SWOT Analysis',
                'Strategy Blueprints'
            ]
        },

        {
            title: 'Branding',
            desc: 'Branding is implanting a unique and positive perception of your brand in the minds of your target audience. Branding gives personality to a business. From colors used in designs to the tone of your mails, a kind of uniformity is expected!',
            color: '#e6e6e6',
            features: [
                'Logo',
                ' Color Palette',
                'Website',
                'Product Packaging',
                'Copywriting'
            ]
        },
        {
            title: 'Digital Marketing',
            desc: 'This is a digital era and to win the game of business one should make use of the digital tools! From the many digital platforms and marketing methods, we can pick the right ones for your business and do what needs to be done.',

            color: '#fff',
            features: [
                'Unlimited access to the course',
                ' Customer Support',
                'Personal mentor',
                'Standard options',
                '5 classes per week'
            ]
        }

    ]


    return (
        <div className='container'>
            <div className='pricing_top'>
                <h2 className='section_title'>Our Services</h2>
                <p>Unlock elite tech services with our Premium Pricing Plan and soar ahead of the competition</p>
            </div>


            <div className='pricing_wrapper'>

                {pricingData.map((pricingItem, index) => (
                    <div className='pricing_item' key={index}>
                        <div className='pricing_card_top' style={{ background: pricingItem.color }}>
                            <h2 >{pricingItem.title}</h2>
                            <h3 >
                                {pricingItem.desc}
                            </h3>
                        </div>
                        <div className='services'>
                            <ul>
                                {pricingItem.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                           
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans