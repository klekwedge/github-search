/* eslint-disable react/require-default-props */
import classes from './InfoItem.module.scss';

export interface Icon {
  url: string;
  text?: string;
  isLink?: boolean;
}

export interface InfoItemProps {
  icon: Icon;
}

export function InfoItem({ icon }: InfoItemProps) {
  const currentText = icon.text || 'Not Available';
  let currentHref;

  if (icon.isLink) {
    currentHref = icon.text && icon.text.startsWith('http') ? icon.text : `https://${icon.text}`;
  }

  return (
    <div className={`${classes.infoItem}${icon.text ? '' : ` ${classes.empty}`}`}>
      {icon.url}
      <div>
        {icon.isLink && icon.text ? (
          <a href={currentHref} target="_blank" rel="noreferrer" className={classes.link}>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
}
