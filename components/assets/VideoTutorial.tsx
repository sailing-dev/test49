import React from 'react';

interface VideoTutorialProps {
  className?: string;
}

const VideoTutorial: React.FC<VideoTutorialProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="13"
    height="13" 
    viewBox="0 0 13 13"
  >
	  <path d="M10.5673 4.23302L8.24471 2.75615C8.0796 2.65341 7.88146 2.65341 7.71634 2.75615L5.3937 4.23302C5.20107 4.35503 5.20107 4.67608 5.3937 4.79809L7.71634 6.27496C7.88146 6.3777 8.0796 6.3777 8.24471 6.27496L10.5673 4.79809C10.7545 4.67608 10.7545 4.35503 10.5673 4.23302ZM11.558 0.662842H1.65107C1.04564 0.662842 0.550293 1.24075 0.550293 1.94708V3.23132C0.550293 3.58448 0.797967 3.87344 1.10068 3.87344C1.40339 3.87344 1.65107 3.58448 1.65107 3.23132V2.5892C1.65107 2.23603 1.89874 1.94708 2.20146 1.94708H11.0077C11.3104 1.94708 11.558 2.23603 11.558 2.5892V10.2946C11.558 10.6478 11.3104 10.9367 11.0077 10.9367H8.25572C7.95301 10.9367 7.70533 11.2257 7.70533 11.5789C7.70533 11.932 7.95301 12.221 8.25572 12.221H11.558C12.1635 12.221 12.6588 11.6431 12.6588 10.9367V1.94708C12.6588 1.24075 12.1635 0.662842 11.558 0.662842ZM7.71634 6.91708L6.05417 5.85758V6.76297C6.05417 7.00056 6.16425 7.21245 6.34037 7.32804L7.71634 8.20132C7.88146 8.30406 8.0796 8.30406 8.24471 8.20132L9.62068 7.32804C9.7968 7.21245 9.90688 6.99413 9.90688 6.76297V5.85758L8.24471 6.91708C8.0796 7.01982 7.88146 7.01982 7.71634 6.91708ZM0.550293 10.2946V12.221H2.20146C2.20146 11.1551 1.46394 10.2946 0.550293 10.2946ZM1.17773 7.78394C0.847502 7.71973 0.550293 8.03437 0.550293 8.42606C0.550293 8.7407 0.748433 9.00397 1.01812 9.05534C2.16293 9.2865 3.06556 10.3396 3.2637 11.6752C3.30773 11.9898 3.53339 12.221 3.80308 12.221C4.13882 12.221 4.40301 11.8742 4.35347 11.489C4.08929 9.58829 2.80138 8.09216 1.17773 7.78394ZM1.15572 5.18978C0.830991 5.15767 0.550293 5.45305 0.550293 5.8319C0.550293 6.15938 0.75944 6.43549 1.03463 6.4676C3.38479 6.73087 5.25611 8.91407 5.48177 11.6559C5.50929 11.977 5.74595 12.2146 6.02665 12.2146C6.35688 12.2146 6.61006 11.8807 6.57704 11.5018C6.28533 8.16921 4.01223 5.52368 1.15572 5.18978Z" fill="white"/>
  </svg>
);

export default VideoTutorial;