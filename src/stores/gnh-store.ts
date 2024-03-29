import { TOption } from '@components/ui/selector';
import { create } from 'zustand';

export interface GnhState {
   headingText: string;
   setHeadingText: (headingText: string) => void;
   subHeadingText: string;
   setSubHeadingText: (subHeadingText: string) => void;
   headingStyle: string;
   setHeadingStyle: (headingStyle: string) => void;
   subHeadingStyle: string;
   setSubHeadingStyle: (subHeadingStyle: string) => void;
   dropDown: TOption[] | undefined;
   setDropDown: (options: TOption[] | undefined) => void;
}

export const gnhState = create<GnhState>((set) => ({
   headingText: '',
   setHeadingText: (headingText: string) => set({ headingText }),
   subHeadingText: '',
   setSubHeadingText: (subHeadingText: string) => set({ subHeadingText }),
   headingStyle: '',
   setHeadingStyle: (headingStyle: string) => set({ headingStyle }),
   subHeadingStyle: '',
   setSubHeadingStyle: (subHeadingStyle: string) => set({ subHeadingStyle }),
   dropDown: undefined,
   setDropDown: (dropDown: TOption[] | undefined) => set({ dropDown }),
}));
