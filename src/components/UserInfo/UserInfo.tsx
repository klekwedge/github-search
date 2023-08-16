/* eslint-disable react/require-default-props */
import { v4 } from 'uuid';
import LocationIcon  from "../../../public/icon-location.svg";
import BlogIcon  from "../../../public/icon-website.svg";
import TwitterIcon  from "../../../public/icon-twitter.svg";
import CompanyIcon  from "../../../public/icon-company.svg";

import InfoItem from '../InfoItem/InfoItem';

import classes from './UserInfo.module.scss';
import { Icon } from '../../types';

export interface UserInfoProps {
  company?: string;
  location?: string;
  twitter?: string;
  blog?: string;
}

function UserInfo({ blog, company, location, twitter }: UserInfoProps) {

  const icons: Icon[] = [
    {
      text: location,
      url: LocationIcon ,
    },
    {
      text: blog,
      url: BlogIcon ,
      isLink: true,
    },
    {
      text: twitter,
      url: TwitterIcon,
    },
    {
      text: company,
      url: CompanyIcon,
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


export default UserInfo;