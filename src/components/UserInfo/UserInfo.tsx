/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { v4 } from 'uuid';
import { Icon, InfoItem, InfoItemProps } from '../InfoItem/InfoItem';

import classes from './UserInfo.module.scss';

export interface UserInfoProps {
  company?: string,
  location?: string,
  twitter?: string,
  blog?: string,
}

export function UserInfo({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) {
  const icons: Icon[] = [
    {
      text: "location",
      url: '/icon-location.svg',
    },
    {
      text: "blog",
      url: '/icon-website.svg',
      isLink: true,
    },
    {
      text: "twitter",
      url: '/icon-twitter.svg',
    },
    {
      text: "company",
      url: '/icon-company.svg',
    },
  ];
  
  return (
    <div className={classes.userInfo}>
      {icons.map((icon) => (
        <InfoItem icon={icon} key={v4()} />
      ))}
    </div>
  );
}