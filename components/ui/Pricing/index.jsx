import GradientWrapper from "../../GradientWrapper";
import Button from "../Button"

const Pricing = () => {

    const plans = [
        {
            name: "Blogger",
            desc: "Start your blogging journey",
            price: 0,
            isMostPop: false,
            features: [
                "Create and publish blog posts",
                "Participate in live audio sessions",
                "Basic profile customization",
                "Follow other bloggers",
                "Basic analytics",
            ],
        },
        {
            name: "Content Creator",
            desc: "Expand your reach and engagement",
            price: 10,
            isMostPop: true,
            features: [
                "All Blogger plan features",
                "Schedule and host live audio sessions",
                "Advanced profile customization",
                "Monetization options",
                "Enhanced analytics",
            ],
        },
        {
            name: "Influencer",
            desc: "Maximize your impact and earnings",
            price: 25,
            isMostPop: false,
            features: [
                "All Content Creator plan features",
                "Priority support",
                "Access to exclusive tools and features",
                "Increased monetization opportunities",
                "Dedicated account manager",
            ],
        },
    ];
    
    return (
        <GradientWrapper wrapperClassName="top-40 inset-x-0">
            <section className='custom-screen text-gray-600'>
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing plans
                    </h1>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Always know what you'll pay with monthly caps and flat pricing.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`bg-white relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "border-[#FF3131]" : ""}`}>
                                <div className="p-8 space-y-4 border-b sm:text-center">
                                    <span className='text-gray-800 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        {item.price === 0? "Free" : `$${item.price}`} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-gray-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="pt-8">
                                        <Button className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? "bg-[#FF3131] hover:bg-[#FF3131] focus:bg-[#FF3131] ring-[#FF3131]" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </GradientWrapper>
    );
};

export default Pricing