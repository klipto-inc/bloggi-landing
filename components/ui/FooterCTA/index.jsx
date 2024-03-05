import DarkWrapper from '../../DarkWrapper';
import NavLink from '../NavLink';

const FooterCTA = () => {
  return (
    <section className='p-6 md:py-10'>
      <div className='mx-auto w-full max-w-6xl'>
        <h2 className='flex flex-col text-center font-sans text-3xl font-semibold tracking-tight text-heading md:text-4xl'>
          What People Say
        </h2>
        <div className='mt-6 gap-6 gap-y-6 sm:columns-2 md:columns-3 '>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Matthew Stratton
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 11C0 4.92487 4.92487 0 11 0V0C17.0751 0 22 4.92487 22 11V11C22 17.0751 17.0751 22 11 22V22C4.92487 22 0 17.0751 0 11V11Z'
                    fill='#1877F2'
                  />
                  <path
                    d='M15.2818 14.1797L15.7695 11H12.7188V8.9375C12.7188 8.06738 13.1441 7.21875 14.5105 7.21875H15.8984V4.51172C15.8984 4.51172 14.6395 4.29688 13.4363 4.29688C10.9227 4.29688 9.28125 5.82012 9.28125 8.57656V11H6.48828V14.1797H9.28125V21.8668C9.84199 21.9549 10.4156 22 11 22C11.5844 22 12.158 21.9549 12.7188 21.8668V14.1797H15.2818Z'
                    fill='white'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Bloggi has been absolutely phenomenal for my productivity! I
                must be saving at least 6 hours per week 🙌”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Elouise Brady
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22 11C22 17.0753 17.0753 22 11 22C4.9247 22 0 17.0753 0 11C0 4.9247 4.9247 0 11 0C17.0753 0 22 4.9247 22 11Z'
                    fill='#DA552F'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.4668 11H9.3499V7.7H12.4668C12.9044 7.7 13.324 7.87384 13.6335 8.18327C13.9429 8.49271 14.1168 8.91239 14.1168 9.35C14.1168 9.78761 13.9429 10.2073 13.6335 10.5167C13.324 10.8262 12.9044 11 12.4668 11ZM12.4668 5.5H7.1499V16.5H9.3499V13.2H12.4668C13.4878 13.2 14.4671 12.7944 15.1891 12.0724C15.9111 11.3503 16.3168 10.3711 16.3168 9.35C16.3168 8.32892 15.9111 7.34965 15.1891 6.62764C14.4671 5.90562 13.4878 5.5 12.4668 5.5Z'
                    fill='white'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Best apps I’d recommend? Definitely Bloggi - it’s up there
                in terms of ease of use and quality of design.”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1515121240746-1fc801ba75a8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2080&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Cecilia Wilkerson
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.3023 6.58231C19.3108 6.77591 19.3108 6.96071 19.3108 7.15431C19.3193 13.0239 15.0069 19.7999 7.12056 19.7999C4.79457 19.7999 2.51102 19.1047 0.550049 17.8023C0.88961 17.8463 1.22917 17.8639 1.56873 17.8639C3.49574 17.8639 5.37182 17.1951 6.89136 15.9543C5.05773 15.9191 3.44481 14.6783 2.88453 12.8655C3.5297 12.9975 4.19184 12.9711 4.82003 12.7863C2.82511 12.3815 1.39046 10.5599 1.38197 8.43911C1.38197 8.42151 1.38197 8.40391 1.38197 8.38631C1.97621 8.72952 2.64684 8.92312 3.32596 8.94072C1.44989 7.63831 0.864143 5.0423 2.00167 3.0095C4.18336 5.79031 7.39221 7.47111 10.8388 7.65591C10.4907 6.11591 10.9661 4.4967 12.0782 3.4055C13.8014 1.72469 16.5179 1.81269 18.1478 3.5991C19.1071 3.4055 20.0324 3.0359 20.8728 2.5167C20.5502 3.5463 19.8796 4.4175 18.9882 4.9719C19.8371 4.8663 20.6691 4.6287 21.4501 4.2767C20.8728 5.1743 20.1427 5.94871 19.3023 6.58231Z'
                    fill='#1D9BF0'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Fantastic piece of software. Everyone on our team uses it
                daily. Now our entire organization is hooked.”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>Jeff Dean</div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 11C0 4.92487 4.92487 0 11 0V0C17.0751 0 22 4.92487 22 11V11C22 17.0751 17.0751 22 11 22V22C4.92487 22 0 17.0751 0 11V11Z'
                    fill='#1877F2'
                  />
                  <path
                    d='M15.2818 14.1797L15.7695 11H12.7188V8.9375C12.7188 8.06738 13.1441 7.21875 14.5105 7.21875H15.8984V4.51172C15.8984 4.51172 14.6395 4.29688 13.4363 4.29688C10.9227 4.29688 9.28125 5.82012 9.28125 8.57656V11H6.48828V14.1797H9.28125V21.8668C9.84199 21.9549 10.4156 22 11 22C11.5844 22 12.158 21.9549 12.7188 21.8668V14.1797H15.2818Z'
                    fill='white'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “<span className='text-primary'>@boredJen</span> Check out
                Bloggi, that might be exactly what you are looking for. It’s
                what we use at{' '}
                <span className='text-primary'>@MetaReality</span> as a team and
                couldn’t be happier.”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Cody Fisher
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.3023 6.58231C19.3108 6.77591 19.3108 6.96071 19.3108 7.15431C19.3193 13.0239 15.0069 19.7999 7.12056 19.7999C4.79457 19.7999 2.51102 19.1047 0.550049 17.8023C0.88961 17.8463 1.22917 17.8639 1.56873 17.8639C3.49574 17.8639 5.37182 17.1951 6.89136 15.9543C5.05773 15.9191 3.44481 14.6783 2.88453 12.8655C3.5297 12.9975 4.19184 12.9711 4.82003 12.7863C2.82511 12.3815 1.39046 10.5599 1.38197 8.43911C1.38197 8.42151 1.38197 8.40391 1.38197 8.38631C1.97621 8.72952 2.64684 8.92312 3.32596 8.94072C1.44989 7.63831 0.864143 5.0423 2.00167 3.0095C4.18336 5.79031 7.39221 7.47111 10.8388 7.65591C10.4907 6.11591 10.9661 4.4967 12.0782 3.4055C13.8014 1.72469 16.5179 1.81269 18.1478 3.5991C19.1071 3.4055 20.0324 3.0359 20.8728 2.5167C20.5502 3.5463 19.8796 4.4175 18.9882 4.9719C19.8371 4.8663 20.6691 4.6287 21.4501 4.2767C20.8728 5.1743 20.1427 5.94871 19.3023 6.58231Z'
                    fill='#1D9BF0'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Just tried Bloggi and I’m obsessed{' '}
                <span className='mr-1' role='img'>
                  😍
                </span>{' '}
                Incredible what you can do. Highly recommend to everyone 10/10!”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1515121240746-1fc801ba75a8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2080&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Zoha Burgess
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22 11C22 17.0753 17.0753 22 11 22C4.9247 22 0 17.0753 0 11C0 4.9247 4.9247 0 11 0C17.0753 0 22 4.9247 22 11Z'
                    fill='#DA552F'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.4668 11H9.3499V7.7H12.4668C12.9044 7.7 13.324 7.87384 13.6335 8.18327C13.9429 8.49271 14.1168 8.91239 14.1168 9.35C14.1168 9.78761 13.9429 10.2073 13.6335 10.5167C13.324 10.8262 12.9044 11 12.4668 11ZM12.4668 5.5H7.1499V16.5H9.3499V13.2H12.4668C13.4878 13.2 14.4671 12.7944 15.1891 12.0724C15.9111 11.3503 16.3168 10.3711 16.3168 9.35C16.3168 8.32892 15.9111 7.34965 15.1891 6.62764C14.4671 5.90562 13.4878 5.5 12.4668 5.5Z'
                    fill='white'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “I’m so excited to try this out. Congrats on your launch! 🎉”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Sabrina Snow
                    </div>
                    <div className='text-xs text-text'>@ssnow9</div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.3023 6.58231C19.3108 6.77591 19.3108 6.96071 19.3108 7.15431C19.3193 13.0239 15.0069 19.7999 7.12056 19.7999C4.79457 19.7999 2.51102 19.1047 0.550049 17.8023C0.88961 17.8463 1.22917 17.8639 1.56873 17.8639C3.49574 17.8639 5.37182 17.1951 6.89136 15.9543C5.05773 15.9191 3.44481 14.6783 2.88453 12.8655C3.5297 12.9975 4.19184 12.9711 4.82003 12.7863C2.82511 12.3815 1.39046 10.5599 1.38197 8.43911C1.38197 8.42151 1.38197 8.40391 1.38197 8.38631C1.97621 8.72952 2.64684 8.92312 3.32596 8.94072C1.44989 7.63831 0.864143 5.0423 2.00167 3.0095C4.18336 5.79031 7.39221 7.47111 10.8388 7.65591C10.4907 6.11591 10.9661 4.4967 12.0782 3.4055C13.8014 1.72469 16.5179 1.81269 18.1478 3.5991C19.1071 3.4055 20.0324 3.0359 20.8728 2.5167C20.5502 3.5463 19.8796 4.4175 18.9882 4.9719C19.8371 4.8663 20.6691 4.6287 21.4501 4.2767C20.8728 5.1743 20.1427 5.94871 19.3023 6.58231Z'
                    fill='#1D9BF0'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Bloggi is by far my favorite note taking app 😍”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Aisha Bernard
                    </div>
                    <div className='text-xs text-text'>@abernard</div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.3023 6.58231C19.3108 6.77591 19.3108 6.96071 19.3108 7.15431C19.3193 13.0239 15.0069 19.7999 7.12056 19.7999C4.79457 19.7999 2.51102 19.1047 0.550049 17.8023C0.88961 17.8463 1.22917 17.8639 1.56873 17.8639C3.49574 17.8639 5.37182 17.1951 6.89136 15.9543C5.05773 15.9191 3.44481 14.6783 2.88453 12.8655C3.5297 12.9975 4.19184 12.9711 4.82003 12.7863C2.82511 12.3815 1.39046 10.5599 1.38197 8.43911C1.38197 8.42151 1.38197 8.40391 1.38197 8.38631C1.97621 8.72952 2.64684 8.92312 3.32596 8.94072C1.44989 7.63831 0.864143 5.0423 2.00167 3.0095C4.18336 5.79031 7.39221 7.47111 10.8388 7.65591C10.4907 6.11591 10.9661 4.4967 12.0782 3.4055C13.8014 1.72469 16.5179 1.81269 18.1478 3.5991C19.1071 3.4055 20.0324 3.0359 20.8728 2.5167C20.5502 3.5463 19.8796 4.4175 18.9882 4.9719C19.8371 4.8663 20.6691 4.6287 21.4501 4.2767C20.8728 5.1743 20.1427 5.94871 19.3023 6.58231Z'
                    fill='#1D9BF0'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Bloggi has been absolutely phenomenal for my productivity! I
                must have saved at least 6 hours per week 🙌”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>

            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1515121240746-1fc801ba75a8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2080&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Inaayah Cordova
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22 11C22 17.0753 17.0753 22 11 22C4.9247 22 0 17.0753 0 11C0 4.9247 4.9247 0 11 0C17.0753 0 22 4.9247 22 11Z'
                    fill='#DA552F'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.4668 11H9.3499V7.7H12.4668C12.9044 7.7 13.324 7.87384 13.6335 8.18327C13.9429 8.49271 14.1168 8.91239 14.1168 9.35C14.1168 9.78761 13.9429 10.2073 13.6335 10.5167C13.324 10.8262 12.9044 11 12.4668 11ZM12.4668 5.5H7.1499V16.5H9.3499V13.2H12.4668C13.4878 13.2 14.4671 12.7944 15.1891 12.0724C15.9111 11.3503 16.3168 10.3711 16.3168 9.35C16.3168 8.32892 15.9111 7.34965 15.1891 6.62764C14.4671 5.90562 13.4878 5.5 12.4668 5.5Z'
                    fill='white'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “Yess! I love the v1 and I’m super pumped about the update 🙌”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Christian Russel
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 11C0 4.92487 4.92487 0 11 0V0C17.0751 0 22 4.92487 22 11V11C22 17.0751 17.0751 22 11 22V22C4.92487 22 0 17.0751 0 11V11Z'
                    fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.7868 11.1625C17.7868 10.6555 17.7413 10.168 17.6568 9.70001H10.9229V12.4658H14.7709C14.6051 13.3595 14.1014 14.1168 13.3441 14.6238V16.4178H15.6549C17.0068 15.173 17.7868 13.34 17.7868 11.1625Z'
                    fill='#4285F4'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.9232 18.15C12.8537 18.15 14.4722 17.5097 15.6552 16.4177L13.3444 14.6237C12.7042 15.0527 11.8852 15.3062 10.9232 15.3062C9.06094 15.3062 7.48469 14.0485 6.92244 12.3585H4.53369V14.211C5.71019 16.5477 8.12819 18.15 10.9232 18.15Z'
                    fill='#34A853'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.9222 12.3585C6.7792 11.9295 6.69795 11.4713 6.69795 11C6.69795 10.5288 6.7792 10.0705 6.9222 9.6415V7.789H4.53345C4.0492 8.75425 3.77295 9.84625 3.77295 11C3.77295 12.1538 4.0492 13.2458 4.53345 14.211L6.9222 12.3585Z'
                    fill='#FBBC05'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.9232 6.69376C11.9729 6.69376 12.9154 7.05451 13.6564 7.76301L15.7072 5.71226C14.4689 4.55851 12.8504 3.85001 10.9232 3.85001C8.12819 3.85001 5.71019 5.45226 4.53369 7.78901L6.92244 9.6415C7.48469 7.95151 9.06094 6.69376 10.9232 6.69376Z'
                    fill='#EA4335'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “This is my go-to note-taking app. The design is stunning and UX
                is top of the line. I can’t imagine living without it now - the
                productivity boost is mind-blowing.”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2081&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>
                      Qasim Beach
                    </div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 11C0 4.92487 4.92487 0 11 0V0C17.0751 0 22 4.92487 22 11V11C22 17.0751 17.0751 22 11 22V22C4.92487 22 0 17.0751 0 11V11Z'
                    fill='#0A66C2'
                  />
                  <path
                    d='M16.157 4.95001H5.84341C5.60652 4.95001 5.37932 5.04412 5.21181 5.21163C5.0443 5.37914 4.9502 5.60633 4.9502 5.84323V16.1568C4.9502 16.3937 5.0443 16.6209 5.21181 16.7884C5.37932 16.9559 5.60652 17.05 5.84341 17.05H16.157C16.3939 17.05 16.6211 16.9559 16.7886 16.7884C16.9561 16.6209 17.0502 16.3937 17.0502 16.1568V5.84323C17.0502 5.60633 16.9561 5.37914 16.7886 5.21163C16.6211 5.04412 16.3939 4.95001 16.157 4.95001ZM8.55667 15.2577H6.73747V9.47911H8.55667V15.2577ZM7.64581 8.67832C7.43945 8.67716 7.23806 8.6149 7.06706 8.49939C6.89605 8.38388 6.7631 8.2203 6.68497 8.02931C6.60684 7.83831 6.58705 7.62844 6.62808 7.4262C6.66911 7.22396 6.76913 7.03841 6.91552 6.89296C7.0619 6.74751 7.24809 6.64868 7.45059 6.60895C7.65309 6.56922 7.86282 6.59037 8.05332 6.66972C8.24381 6.74907 8.40653 6.88307 8.52094 7.05481C8.63535 7.22656 8.69632 7.42834 8.69615 7.6347C8.6981 7.77286 8.67221 7.90999 8.62003 8.03793C8.56785 8.16587 8.49044 8.282 8.39243 8.37939C8.29441 8.47678 8.17779 8.55343 8.04952 8.60479C7.92125 8.65615 7.78395 8.68116 7.64581 8.67832ZM15.2621 15.2627H13.4437V12.1058C13.4437 11.1748 13.048 10.8874 12.5371 10.8874C11.9976 10.8874 11.4682 11.2941 11.4682 12.1293V15.2627H9.64903V9.48331H11.3985V10.2841H11.422C11.5976 9.92866 12.2127 9.32114 13.1513 9.32114C14.1664 9.32114 15.2629 9.92362 15.2629 11.6882L15.2621 15.2627Z'
                    fill='white'
                  />
                </svg>
              </div>

              <p className='mt-2 text-base text-heading'>
                “There was a time when I used Notion for all of my research,
                until I discovered Bloggi. It’s just so much faster and more
                responsive - not to mention all of the functionality and the
                beautiful UX. You can tell someone put a lot of thought into
                this product! 💯”
              </p>
            </a>
          </div>
          <div className='break-inside-avoid-column pt-6 bg-gray-50 rounded-md shadow-sm'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer noopener'
              className='block rounded-2xl bg-layer-2 px-6 pt-4 pb-5 hover:bg-layer-3'>
              <div className='flex justify-between'>
                <div className='flex content-center items-center gap-2'>
                  <img
                    src='https://images.unsplash.com/photo-1515121240746-1fc801ba75a8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2080&amp;q=80'
                    alt='user'
                    className='inline-block h-12 w-12 rounded-full'
                  />
                  <div>
                    <div className='font-semibold text-heading'>Chad Amin</div>
                    <div className='text-xs text-text'>@chadamin</div>
                  </div>
                </div>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.3023 6.58231C19.3108 6.77591 19.3108 6.96071 19.3108 7.15431C19.3193 13.0239 15.0069 19.7999 7.12056 19.7999C4.79457 19.7999 2.51102 19.1047 0.550049 17.8023C0.88961 17.8463 1.22917 17.8639 1.56873 17.8639C3.49574 17.8639 5.37182 17.1951 6.89136 15.9543C5.05773 15.9191 3.44481 14.6783 2.88453 12.8655C3.5297 12.9975 4.19184 12.9711 4.82003 12.7863C2.82511 12.3815 1.39046 10.5599 1.38197 8.43911C1.38197 8.42151 1.38197 8.40391 1.38197 8.38631C1.97621 8.72952 2.64684 8.92312 3.32596 8.94072C1.44989 7.63831 0.864143 5.0423 2.00167 3.0095C4.18336 5.79031 7.39221 7.47111 10.8388 7.65591C10.4907 6.11591 10.9661 4.4967 12.0782 3.4055C13.8014 1.72469 16.5179 1.81269 18.1478 3.5991C19.1071 3.4055 20.0324 3.0359 20.8728 2.5167C20.5502 3.5463 19.8796 4.4175 18.9882 4.9719C19.8371 4.8663 20.6691 4.6287 21.4501 4.2767C20.8728 5.1743 20.1427 5.94871 19.3023 6.58231Z'
                    fill='#1D9BF0'
                  />
                </svg>
              </div>
              <p className='mt-2 text-base text-heading'>
                “There are good apps, great apps, and there’s Bloggi - in a
                category of its own. I mean... words can’t describe how much I
                love it. Easily the best money I’ve ever spent.”
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
