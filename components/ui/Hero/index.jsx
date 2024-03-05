import GradientWrapper from '../../GradientWrapper';
import NavLink from '../NavLink';

const Hero = () => (
  <section>
    {/* <GradientWrapper wrapperClassName="inset-0" className="custom-screen text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    The fastest way to Increase your <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">website traffic</span>
                </h1>
                <p className="max-w-xl mx-auto">
                    The ultimate way to get more website traffic and grow your online business. Start your free trial now.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/pricing"
                        className="flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                    >
                        Get free trial
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
                        scroll={false}
                    >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </GradientWrapper> */}
    <section className='py-3 px-2 lg:px-8 xl:px-0'>
      <GradientWrapper
        wrapperClassName='inset-0'
        className='custom-screen text-gray-600'>
        <div className='mx-auto max-w-6xl space-y-8 md:space-y-10'>
          <div className='mx-auto flex w-full max-w-5xl flex-col items-center space-y-8 text-center lg:px-8'>
            <div className='flex flex-col items-center gap-2 md:flex-row'>
              <div className='flex -space-x-4'>
                <img
                  src='https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/randy-warren.png'
                  alt='avatar'
                  className='h-14 w-14 rounded-full md:h-16 md:w-16'
                />
                <img
                  src='https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/irina-zaytesev.png'
                  alt='avatar'
                  className='h-14 w-14 rounded-full md:h-16 md:w-16'
                />
                <img
                  src='https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/pasquale-blanco.png'
                  alt='avatar'
                  className='h-14 w-14 rounded-full md:h-16 md:w-16'
                />
                <img
                  src='https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/dianne-russell.png'
                  alt='avatar'
                  className='h-14 w-14 rounded-full md:h-16 md:w-16'
                />
                <img
                  src='https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/dianne-russell.png'
                  alt='avatar'
                  className='h-14 w-14 rounded-full md:h-16 md:w-16'
                />
                <div className='grid h-14 w-14 bg-gray-500 text-white place-content-center rounded-full bg-layer-2 font-medium dark:bg-layer-3 md:h-16 md:w-16'>
                  +2000
                </div>
              </div>
              <p className='text-lg font-medium'>
                Trusted by over 2k Creators around the world.
              </p>
            </div>
            {/* <h1 className='text-4xl font-semibold text-heading md:text-6xl'>
            Get the complete view of your vehicle in one dashboard.
          </h1> */}
            <h1 className='text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl'>
              The fastest way to Reach your{' '}
              <span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]'>
                audience as a creator
              </span>
            </h1>
            <p className='text-lg font-medium md:max-w-3xl'>
              Discover a new way to express yourself. Join our innovative
              blogging platform where you can share your thoughts through
              captivating blog posts and engage with your audience in real-time
              through dynamic live audio sessions.
            </p>
            <form className='flex flex-col gap-2 md:flex-row'>
              <div>
                <label
                  htmlFor='email'
                  className='sr-only block text-sm font-semibold text-heading'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email'
                  className='block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm'
                />
              </div>
              <button
                type='submit'
                className='inline-flex bg-[#FF3131] cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80'>
                Try it for free
              </button>
            </form>
          </div>

          <div>
            <img
              src='https://saasblocks-preview-tdg1-prd.fly.dev/assets/mobile-app-dashboard.jpeg'
              alt=''
              className='w-full rounded-3xl'
            />
          </div>
        </div>
      </GradientWrapper>
    </section>
  </section>
);

export default Hero;
