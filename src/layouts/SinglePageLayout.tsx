import { IWithReactChildren } from '@shared/interfaces/default-interfaces';
import React, { ComponentProps } from 'react';

export default function SinglePageLayout({ children, ...props }: IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div className='p-3 flex flex-col gap-5' {...props}>
         {children}
      </div>
   );
}
