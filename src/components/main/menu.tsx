import React from 'react';
import RadioGroup from 'components/ui/radio';

enum MenuType {
   BREAKFAST = 'BREAKFAST',
   LUNCH = 'LUNCH',
   DINNER = 'DINNER',
}

// interface IMenu {
//    id: number;
//    content: string;
// }

export default function Menu() {
   // const [type, setType] = React.useState<MenuType>(MenuType.BREAKFAST);
   return (
      <section>
         <h3 className='font-bold text-lg p-4'>오늘의 학식</h3>
         <div>
            <RadioGroup
               name='menu'
               data={[
                  { label: '아침', value: MenuType.BREAKFAST },
                  { label: '점심', value: MenuType.LUNCH },
                  { label: '저녁', value: MenuType.DINNER },
               ]}
               onChange={(e) => console.log(e.target.value)}
            />
         </div>
      </section>
   );
}
