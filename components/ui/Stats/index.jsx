import SectionWrapper from '../../SectionWrapper';

const stats = [
    {
        data: '2100',
        desc: 'Active users on our platform.'
    },
    {
        data: '900',
        desc: 'New users sign up per day.'
    },
    {
        data: '4000+',
        desc: 'Total page views per month on all hosted blogs.'
    },
    {
        data: '20%',
        desc: 'Percentage of users choosing our platform for their blogs.'
    }
];


const Stats = () => (
  <SectionWrapper>
    <div className='custom-screen text-gray-600'>
      <div className='max-w-xl xl:mx-auto xl:text-center'>
        <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
          Elevate Your Profile on Our Platform
        </h3>
        <p className='mt-3'>
          We optimize your visibility by distributing your profile across
          various geographical locations, ensuring maximum exposure.
        </p>
      </div>
      <div className='mt-12'>
        <ul className='flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center'>
          {stats.map((item, idx) => (
            <li key={idx} className='sm:max-w-[15rem]'>
              <h4 className='text-4xl text-[#FF3131] font-semibold'>
                {item.data}
              </h4>
              <p className='mt-3 font-medium'>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default Stats;
