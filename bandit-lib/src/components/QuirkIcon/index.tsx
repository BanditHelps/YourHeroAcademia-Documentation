import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

type QuirkIconSize = 'sm' | 'md' | 'lg' | 'title';

type QuirkIconProps = {
  src: string;
  alt?: string;
  size?: QuirkIconSize;
  className?: string;
};

const SIZE_CLASS: Record<QuirkIconSize, string> = {
  sm: 'quirk-icon--sm',
  md: '',
  lg: 'quirk-icon--lg',
  title: 'quirk-icon--title',
};

export default function QuirkIcon({
  src,
  alt = '',
  size = 'md',
  className,
}: QuirkIconProps): ReactNode {
  const href = useBaseUrl(src);
  return (
    <img
      src={href}
      alt={alt}
      className={clsx('quirk-icon', SIZE_CLASS[size], className)}
    />
  );
}
