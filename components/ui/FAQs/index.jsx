import SectionWrapper from "../../SectionWrapper";

const faqsList = [
    {
        q: "What is a blogging platform with live audio sessions?",
        a: "A blogging platform with live audio sessions combines traditional blogging features with the ability to host live audio sessions."
    },
    {
        q: "How do live audio sessions benefit bloggers?",
        a: "Live audio sessions provide bloggers with an interactive platform to connect with their audience in real-time."
    },
    {
        q: "What are some key features of a blogging",
        a: "Key features may include blog post creation, live audio session hosting, real-time chat, audience engagement tools, and analytics."
    },
    {
        q: "How can bloggers monetize a platform with live audio sessions?",
        a: "Bloggers can monetize by offering premium content, partnering with sponsors, selling digital products, or running advertisements."
    },
    {
        q: "What are some premium features of such a blogging platform?",
        a: "Premium features may include unlimited live audio session hosting, advanced analytics, custom branding options, priority support, and integrations."
    },
    {
        q: "What distinguishes a blogging platform with live audio sessions from traditional platforms?",
        a: "Live audio sessions offer real-time engagement and foster a stronger sense of community compared to text-based platforms."
    },
    {
        q: "Can bloggers interact with their audience during live audio sessions?",
        a: "Yes, bloggers can interact with their audience through real-time chat and comments during live audio sessions."
    },
    {
        q: "Can bloggers host private live audio sessions?",
        a: "Yes, bloggers can choose to host private live audio sessions accessible only to selected participants or members."
    },
    
    {
        q: "Are there audience engagement tools available during live audio sessions?",
        a: "Yes, audience engagement tools such as polls and Q&A sessions are often available to enhance interaction during live sessions."
    },
    // {
    //     q: "How can bloggers measure the success of their live audio sessions?",
    //     a: "Bloggers can measure success through analytics tracking audience engagement, session duration, and participant feedback."
    // },
    // {
    //     q: "What types of content can bloggers share during live audio sessions?",
    //     a: "Bloggers can share a variety of content including discussions, interviews, presentations, and live events."
    // },
    // {
    //     q: "What are the technical requirements for hosting live audio sessions?",
    //     a: "Technical requirements may include a stable internet connection, compatible devices, and audio recording equipment."
    // },
    // {
    //     q: "Can bloggers schedule live audio sessions in advance?",
    //     a: "Yes, bloggers can schedule live audio sessions in advance to notify their audience and ensure maximum attendance."
    // },
    // {
    //     q: "Is there a limit to the duration of live audio sessions?",
    //     a: "The duration of live audio sessions may vary depending on their plan, but many allow sessions of 1 hour."
    // },
    // {
    //     q: "Are there moderation tools available for live audio sessions?",
    //     a: "Yes, moderation tools such as muting participants or managing chat settings are often available to maintain control during live sessions."
    // },
    // {
    //     q: "How can bloggers promote their live audio sessions?",
    //     a: "Bloggers can promote sessions through social media, email newsletters, blog announcements, and collaborations with influencers or other bloggers."
    // }
];


const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-600">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                    Frequently asked questions
                </h2>
                <p className="mt-3">
                    Everything you need to know about the product. Can’t find the answer you’re looking for? feel free to {" "}
                    <a
                        className='text-[#FF3131] hover:text-[#FF3131] duration-150 font-semibold whitespace-nowrap'
                        href='mailto:example@domain.com'>
                        contact us
                    </a>.
                </p>
            </div>
            <div className='mt-12'>
                <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                    {faqsList.map((item, idx) => (
                        <li
                            key={idx}
                            className="space-y-3"
                        >
                            <summary
                                className="flex items-center justify-between font-semibold text-gray-700">
                                {item.q}
                            </summary>
                            <p
                                dangerouslySetInnerHTML={{ __html: item.a }}
                                className='leading-relaxed'>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs