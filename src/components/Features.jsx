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
    <div className="mx-auto bg-slate-950 md:p-16">
      <div className="max-w-[1120px] w-full mx-auto">
        <div className="p-4">
          <p className="font-semibold text-3xl mb-4 text-gray-100">Features</p>
          <p className="font-light text-gray-300 text-lg">
            Our product has incredible security, and features - ensuring you're 1 step ahead of the competition.{' '}
            <span className="text-cyan-300 font-bold">Proudly</span> boasting a{' '}
            <span className="underline">Zero Detection</span> history across all products.
          </p>
        </div>

        <div className="m-2 text-white mx-auto md:mt-12">
          <Tabs value={tab} onChange={tabChange}>
            <div className="flex flex-col md:flex-row md:gap-8">

              <div className="md:flex-1">
                <TabPanel value={1}>
                  <div className="m-2 h-[350px] md:h-[400px] rounded bg-neutral-500 bg-opacity-50">
                    <p className="text-xl">Panel 1</p>
                  </div>
                </TabPanel>

                <TabPanel value={2}>
                  <div className="m-2 h-[350px] md:h-[400px] rounded bg-neutral-500 bg-opacity-50">
                    <p className="text-xl">Panel 2</p>
                  </div>
                </TabPanel>

                <TabPanel value={3}>
                  <div className="m-2 h-[350px] md:h-[400px] rounded bg-neutral-500 bg-opacity-50">
                    <p className="text-xl">Panel 3</p>
                  </div>
                </TabPanel>
              </div>


              <div className="md:w-[500px]">
                <TabsList className="flex flex-row md:flex-col w-full">
                  <Tab 
                    value={1} 
                    className={`m-2 md:w-full rounded-xl md:p-2 md:mb-4 md:text-lg transition duration-300 ease-in-out ${
                      tab === 1 ? "bg-slate-900" : "bg-none"
                    }`}
                  >
                    <TabButton 
                      title="Aim" 
                      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolore. Quaerat doloremque eligendi eos"
                    />
                  </Tab>
                  <Tab 
                    value={2} 
                    className={`m-2 rounded-xl p-2 mb-4 text-lg transition duration-300 ease-in-out ${
                      tab === 2 ? "bg-slate-900" : "bg-none"
                    }`}
                  >
                    <TabButton 
                      title="Visuals" 
                      description="Lorem ipsum. Molestiae, dolore. Quaerat doloremque eligendi eos, optio eius odio nisi deserunt delectus!"
                    />
                  </Tab>
                  <Tab 
                    value={3} 
                    className={`m-2 rounded-xl p-2 mb-4 text-lg transition duration-300 ease-in-out ${
                      tab === 3 ? "bg-slate-900" : "bg-none"
                    }`}
                  >
                    <TabButton 
                      title="Misc" 
                      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolore. Quaerat doloremque eligendi eos"
                    />
                  </Tab>
                </TabsList>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Features

