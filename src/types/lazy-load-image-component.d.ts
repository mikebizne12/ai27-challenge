// src/react-lazy-load-image-component.d.ts
declare module 'react-lazy-load-image-component' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    alt?: string;
    effect?: string;
    placeholderSrc?: string;
    visibleByDefault?: boolean;
    afterLoad?: () => void;
    beforeLoad?: () => void;
  }

  export const LazyLoadImage: ComponentType<LazyLoadImageProps>;
}
