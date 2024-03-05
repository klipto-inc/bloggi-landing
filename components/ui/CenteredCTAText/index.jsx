import SectionWrapper from '../../SectionWrapper';

const CenteredCTAText = () => {
  return (
    <div className=''>
      <SectionWrapper>
        <div className='custom-screen text-center'>
          <div className='max-w-xl mx-auto'>
            <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              Live Audio Sessions and Chat
            </h2>
            <p className='mt-3 text-gray-600'>
              Engage your audience in real-time discussions and interactions.
              Host dynamic live audio sessions while enabling participants to
              connect through live chat.
            </p>
          </div>
        </div>

        <section className='p-8 md:p-20'>
          <div className='mx-auto grid w-full gap-y-8 gap-x-10 md:grid-cols-2 md:place-items-center lg:max-w-6xl'>
            <img
              className='rounded-2xl hover:shadow-2xl'
              src='https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
              alt=''
            />

            <div className='grid gap-y-3 md:max-w-sm md:gap-y-5'>
              <div>
                <h3 className='mb-2 font-sans text-xl font-semibold tracking-tight text-heading md:text-2xl'>
                  Seamless Live Audio Sessions
                </h3>
                <p className='pb-2 pt-0 text-lg text-text'>
                  Engage your audience with real-time discussions. Host dynamic
                  live audio sessions effortlessly, fostering meaningful
                  conversations and connections.
                </p>
              </div>
              <div>
                <h3 className='mb-2 font-sans text-xl font-semibold tracking-tight text-heading md:text-2xl'>
                  Interactive Q&A
                </h3>
                <p className='pb-2 pt-0 text-lg text-text'>
                  Foster engagement with your audience through interactive Q&A
                  sessions. Encourage participation and address inquiries in
                  real-time, enhancing the overall experience.
                </p>
              </div>
              <div>
                <h3 className='mb-2 font-sans text-xl font-semibold tracking-tight text-heading md:text-2xl'>
                  Scheduled Events
                </h3>
                <p className='pb-2 pt-0 text-lg text-text'>
                  Plan and promote upcoming live audio sessions effortlessly.
                  Schedule events in advance, allowing your audience to mark
                  their calendars and join your discussions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <section className='p-8 md:p-10'>
        <div className='mx-auto max-w-6xl space-y-8 md:space-y-20'>
          {/* 1/3 and 2/3 */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            <div className='flex flex-col rounded-3xl bg-layer-2 lg:px-2'>
              <h2 className='bg-gradient-to-r from-rose-100 to-rose-300 font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl'>
                Make progress more effortlessly.
              </h2>
              <p className='mt-4 text-lg'>
                Foster meaningful conversations, share insights, and build
                connections effortlessly through your content.
              </p>
              <div className='mt-6 grid flex-1 place-items-center rounded-md'>
                {/* <div class='relative flex  flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
                  <div class='w-96 rounded-xl bg-white p-8' id='widget'>
                    <h6 class='text-xs text-gray-400'>Total earnings</h6>
                    <div class='mt-2 flex text-xl font-semibold'>
                      <span>$27,956</span>
                      <span class='ml-2 flex items-center text-xs text-green'>
                        31%
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='h-3 w-3'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M7 11l5-5m0 0l5 5m-5-5v12'></path>
                        </svg>
                      </span>
                    </div>
                    <div class='mt-8 flex space-x-2'>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          10
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-10 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Jan</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          12
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-8 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Feb</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          20
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-20 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Mar</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          16
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-16 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Apr</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          8
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-8 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>May</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          12
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-12 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Jun</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          8
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-8 w-12 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Jul</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          16
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-16 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Aug</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          12
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-12 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Sep</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          6
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-6 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Oct</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>
                          16
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-16 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Nov</div>
                      </div>
                      <div class='group relative flex flex-col items-center space-y-2'>
                        <div class='absolute top-2 hidden transform rounded-full bg-black px-2 py-1 text-xs text-white duration-200 group-hover:block'>
                          12
                        </div>
                        <div class='flex h-32 w-3 items-end rounded-full bg-slate-200 group-hover:cursor-pointer'>
                          <div class='h-12 w-3 rounded-full bg-blue'></div>
                        </div>
                        <div class='text-xs text-gray-500'>Dec</div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className='relative flex flex-col items-center justify-center overflow-hidden  py-6 sm:py-12'>
                  <div
                    className='relative overflow-hidden rounded-2xl border bg-white p-5 py-3 pt-5'
                    id='widget'>
                    <div className='mb-8 flex items-center justify-between'>
                      <div>
                        <div className='text-sm text-gray-400'>
                          It's amazing!
                        </div>
                        <div className='text-xl font-medium text-gray-700'>
                          5 day streak
                        </div>
                      </div>
                      <div className='text-3xl'>🎉</div>
                    </div>
                    <div className='w-full border-t' />
                    <div className='relative -mt-3 flex space-x-5 sm:space-x-8'>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 text-white'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <polyline points='20 6 9 17 4 12' />
                        </svg>
                      </div>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 text-white'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <polyline points='20 6 9 17 4 12' />
                        </svg>
                      </div>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 text-white'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <polyline points='20 6 9 17 4 12' />
                        </svg>
                      </div>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 text-white'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <polyline points='20 6 9 17 4 12' />
                        </svg>
                      </div>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 text-white'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <polyline points='20 6 9 17 4 12' />
                        </svg>
                      </div>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-green-100' />
                      <div className='flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-green-100' />
                    </div>
                    <div className='mt-6 flex justify-between border-t border-gray-100 p-2'>
                      <div>
                        <div className='font-semibold text-gray-700'>356</div>
                        <div className='text-xs text-gray-400'>
                          Tweets posted
                        </div>
                      </div>
                      <div>
                        <div className='font-semibold text-gray-700'>36</div>
                        <div className='text-xs text-gray-400'>Comments</div>
                      </div>
                      <div>
                        <div className='font-semibold text-gray-700'>1256</div>
                        <div className='text-xs text-gray-400'>Liked posts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-3xl bg-layer-2 p-8 md:col-span-2'>
              <h2 className='bg-gradient-to-r bg-clip-text text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl'>
                You're in control.
              </h2>
              <p className='mt-4 text-lg'>
                All of your stats are displayed in an easy to understand
                dashboard. Make decisions with confidence.
              </p>
              <img
                className='mt-6 lg:mt-14 rounded-md'
                src='https://www.insidenews.co.uk/wp-content/uploads/2023/11/blog-sharing-blog.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CenteredCTAText;
