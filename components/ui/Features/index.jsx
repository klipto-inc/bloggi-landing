import DarkWrapper from '../../DarkWrapper';
import { MdOutlineLightMode, MdOutlineViewInAr } from 'react-icons/md';
import { TbBrandGoogleAnalytics, TbBulb } from 'react-icons/tb';
import { HiMiniMicrophone, HiOutlineUserGroup } from "react-icons/hi2";
import { LuShieldCheck } from 'react-icons/lu';
import { MdOutlineWebhook } from 'react-icons/md';
import { HiOutlineBellAlert } from 'react-icons/hi2';

const Features = () => {
  // const features = [
  //     {
  //         icon:
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  //             </svg>,
  //         title: "Email and Slack reports",
  //         desc: "With weekly and/or monthly statistics, you can keep track of your traffic."
  //     },
  //     {
  //         icon:
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path d="M3.171 12.0945V11.85C4.6785 11.697 5.4165 10.9275 5.4165 9.45V6.7545C5.4165 5.1135 6.0015 4.4475 7.4475 4.4475H7.857V3H7.293C4.875 3 3.735 4.1385 3.735 6.528V8.814C3.735 10.455 3.171 10.998 1.5 10.998V12.9465C3.171 12.9465 3.735 13.4895 3.735 15.1305V17.4165C3.735 19.806 4.8735 20.9445 7.293 20.9445H7.857V19.4985H7.4475C6.0015 19.4985 5.4165 18.8325 5.4165 17.1915V14.4945C5.4165 13.0185 4.6785 12.249 3.171 12.0945ZM20.829 11.85V12.0945C19.3215 12.249 18.5835 13.0185 18.5835 14.4945V17.1915C18.5835 18.8325 17.9985 19.4985 16.5525 19.4985H16.143V20.9445H16.707C19.1265 20.9445 20.265 19.806 20.265 17.4165V15.1305C20.265 13.4895 20.829 12.9465 22.5 12.9465V10.998C20.829 10.998 20.265 10.455 20.265 8.814V6.528C20.265 4.1385 19.125 3 16.707 3H16.143V4.446H16.5525C17.9985 4.446 18.5835 5.112 18.5835 6.753V9.45C18.5835 10.926 19.3215 11.6955 20.829 11.85Z" fill="currentColor" />
  //             </svg>,
  //         title: "A powerful and flexible API",
  //         desc: "Our API allows you to obtain your statistics programmatically, send them wherever you want."
  //     },
  //     {
  //         icon:
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  //             </svg>,
  //         title: "Own and control your data",
  //         desc: "We guarantee that your website data will never be shared or sold to a third party."
  //     },
  //     {
  //         icon:
  //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  //                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  //             </svg>,
  //         title: "Analyze marketing campaigns",
  //         desc: "we help you understand how well your marketing campaigns are performing."
  //     },
  // ]

  return (
    <section
      id='features'
      className='w-full bg-layer-1 p-6 text-center md:p-20'>
      <div className='mx-auto w-full max-w-6xl'>
        <span className='leading-sm inline-flex items-center rounded-full border-2 border-orange-200 bg-orange-200 px-2 py-0.5 text-xs font-bold font-semibold uppercase text-orange-600 shadow-sm'>
          <TbBulb className='mr-1 h-5 w-5' />
          Features
        </span>
        <h2 className='mx-auto mt-4 text-center text-3xl font-semibold tracking-tight text-heading md:max-w-2xl md:text-3xl'>
          Elevate your content with Bloggi Ai.
        </h2>
        <p className='mt-6 text-lg text-text'>
          Here are the key features of Bloggi Ai.
        </p>

        <div className='mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2'>
          <div className='relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2'>
            <div className='grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3'>
              <HiMiniMicrophone className='h-8 w-8 stroke-gradient gradient-fresh-mint' />
            </div>
            <h3 className='text-xl font-semibold tracking-tight text-heading'>
              Live Audio Sessions
            </h3>
            <p className='font-medium text-text'>
              Host and participate in live audio discussions, similar to Twitter
              Spaces, to engage your audience in real-time.
            </p>
            <span className='inline-flex bg-[#FF3131] cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80'>
              Learn more
            </span>
          </div>
          <div className='relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2'>
            <div className='grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3'>
              <MdOutlineViewInAr className='h-8 w-8 stroke-gradient gradient-peach' />
            </div>
            <h3 className='text-xl font-semibold tracking-tight text-heading'>
              Blogging Interface
            </h3>
            <p className='font-medium text-text'>
              Create and publish blog posts with ease, including text
              formatting, image embedding, and multimedia content support.
            </p>
            <span className='inline-flex bg-[#FF3131] cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80'>
              Learn more
            </span>
          </div>
          <div className='relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2'>
            <div className='grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3'>
              <HiOutlineUserGroup className='h-8 w-8 stroke-gradient gradient-sky' />
            </div>
            <h3 className='text-xl font-semibold tracking-tight text-heading'>
              Community Engagement
            </h3>
            <p className='font-medium text-text'>
              Foster community interaction through comments, discussions, and
              following other bloggers to stay updated.
            </p>
            <span className='inline-flex bg-[#FF3131] cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80'>
              Learn more
            </span>
          </div>
          <div className='relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2'>
            <div className='grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3'>
              <TbBrandGoogleAnalytics className='h-8 w-8 stroke-gradient gradient-dusk' />
            </div>
            <h3 className='text-xl font-semibold tracking-tight text-heading'>
              Analytics and Insights
            </h3>
            <p className='font-medium text-text'>
              Gain valuable insights into your content performance and audience
              engagement with advanced analytics tools.
            </p>
            <span className='inline-flex bg-[#FF3131] cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80'>
              Learn more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
