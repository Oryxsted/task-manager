import React from 'react';
import Timer from './timer/Timer';
import TabsLeftNavigation from './leftNavigation/LeftNavigation';
/**
 * 
 * @returns Левая колонка
 */
 const LeftBar = () => {    
    let options = {
        timer: {
          workInterval:25,
          chillInterval:5,
        },
      };

    return (
        <div className='left__bar'>
          <Timer options={options.timer}/>
          <TabsLeftNavigation />
        </div>
    );
 }
 export default LeftBar;