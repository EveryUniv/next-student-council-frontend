import { TOption } from '@components/ui/selector';
import { gnbState } from '@stores/gnb-store';
import { gnhState } from '@stores/gnh-store';
import { navStore } from '@stores/nav-store';

interface LayoutProps extends TopHeaderLayoutProps, Partial<HeadingLayoutProps>, NavLayoutProps {}
interface TopHeaderLayoutProps {
   title: string | null;
   backButton: boolean;
   isMain: boolean;
}

interface HeadingLayoutProps {
   headingText: string;
   subHeadingText: string;
   headingStyle: string;
   subHeadingStyle: string;
   dropDown?: TOption[];
}

interface NavLayoutProps {
   margin?: string;
   fullscreen: boolean;
   rounded: boolean;
}

export const useLayout = () => {
   const { setTitle, setBackButton, setIsMain } = gnbState();
   const { setHeadingText, setSubHeadingText, setHeadingStyle, setSubHeadingStyle, setDropDown } = gnhState();
   const { setFullscreen, setRounded, setMargin } = navStore();

   const setTopHeader = ({ title, backButton, isMain }: TopHeaderLayoutProps) => {
      setTitle(title);
      setBackButton(backButton);
      setIsMain(isMain);
   };

   const setHeadingLayout = ({
      headingText,
      subHeadingText,
      headingStyle,
      subHeadingStyle,
      dropDown,
   }: HeadingLayoutProps) => {
      setHeadingText(headingText);
      setSubHeadingText(subHeadingText);
      setHeadingStyle(headingStyle);
      setSubHeadingStyle(subHeadingStyle);
      setDropDown(dropDown);
   };

   const setNavLayout = ({ margin, fullscreen, rounded }: NavLayoutProps) => {
      setMargin(margin ?? '0');
      setFullscreen(fullscreen);
      setRounded(rounded);
   };

   const setLayout = ({
      title,
      backButton,
      isMain,
      fullscreen,
      headingText,
      subHeadingText,
      headingStyle,
      subHeadingStyle,
      margin,
      rounded,
      dropDown,
   }: LayoutProps) => {
      setTopHeader({ title, backButton, isMain });
      setHeadingLayout({
         headingText: headingText!,
         subHeadingText: subHeadingText!,
         headingStyle: headingStyle!,
         subHeadingStyle: subHeadingStyle!,
         dropDown: dropDown ?? [],
      });
      setNavLayout({ margin, fullscreen, rounded });
   };

   return { setLayout };
};
