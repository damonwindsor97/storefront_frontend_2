import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

import { useState } from 'react';

import TabButton from './TabButton';

function Features() {
  const [tab, setTab] = useState(1);

  const tabChange = (event, newTab) => {
    setTab(newTab);
};

  return (
    <div className='mt-[200px] md:w-full mx-auto bg-slate-950 p-16'>
      <div className='md:w-[1120px] mx-auto'>
        <div className=' p-4 '>
          <p className='font-semibold text-3xl mb-4 text-gray-100'>Features</p>
          <p className='font-light md:w-[550px] text-gray-300 text-lg'>Our product has incredible security, and features - ensuring you're 1 step ahead of the competition. Proudly boasting a Zero Detection history across all products.</p>
        </div>

        <div className='text-white md:w-[1120px] mx-auto relative md:mt-12'>
          <Tabs value={tab} onChange={tabChange}>
            <div className='absolute inset-y-0 right-0 '>
              <TabsList className='flex flex-col '>
                <Tab value={1} className={` rounded-xl p-2 mb-4 text-lg transition duration-300 ease-in-out ${tab === 1 ? "bg-slate-900" : " bg-none" } `}><TabButton title="Aim" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolore. Quaerat doloremque eligendi eos"/></Tab>
                <Tab value={2} className={`rounded-xl  p-2 mb-4 text-lg transition duration-300 ease-in-out ${tab === 2 ? " bg-slate-900" : " bg-none" } `}><TabButton title="Visuals" description="Lorem ipsum. Molestiae, dolore. Quaerat doloremque eligendi eos, optio eius odio nisi deserunt delectus!"/></Tab>
                <Tab value={3} className={`rounded-xl  p-2 mb-4 text-lg transition duration-300 ease-in-out  ${tab === 3 ? " bg-slate-900" : "bg-none" }  `}><TabButton title="Misc" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolore. Quaerat doloremque eligendi eos"/></Tab>
              </TabsList>
            </div>

            <div className='text-center '>
              <TabPanel value={1}>
                <div className='md:w-[520px] md:h-[400px] rounded bg-neutral-500 bg-opacity-50 '>
                  <p className='text-xl'>Panel 1</p>
                </div>
              </TabPanel>

              <TabPanel value={2}>
                <div className='md:w-[520px] md:h-[400px] rounded bg-neutral-500 bg-opacity-50'>
                  <p className='text-xl'>Panel 2</p>
                </div>
              </TabPanel>

              <TabPanel value={3}>
                <div className='md:w-[520px] md:h-[400px]  rounded bg-neutral-500 bg-opacity-50'>
                  <p className='text-xl'>Panel 3</p>
                </div>
              </TabPanel>

            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Features