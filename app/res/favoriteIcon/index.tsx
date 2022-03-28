import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  color?: string;
  isFavorite?: boolean;
}

const FavoriteIcon = ({color, isFavorite = false}: IconProps): JSX.Element => {
  if (isFavorite) {
    return (
      <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <Path
          d="M19.9999 9.62787C19.9871 10.8067 19.5159 11.9342 18.6865 12.7711C18.0976 13.3907 17.4786 13.9649 16.8747 14.5694L15.984 15.4459L13.7948 17.6522L12.6927 18.7251C12.5074 18.9016 12.2615 19 12.0057 19C11.75 19 11.5041 18.9016 11.3188 18.7251L10.3828 17.8033L8.35967 15.7934L7.00088 14.4334L5.37033 12.9222C4.7316 12.2916 4.29082 11.488 4.10213 10.6101C4.0114 10.2038 3.98088 9.78624 4.01154 9.37097C4.07713 8.26602 4.54432 7.22326 5.32504 6.43931C5.98292 5.75015 6.83691 5.28054 7.77086 5.09436C8.51487 4.94495 9.28398 4.97826 10.0123 5.19144C10.7407 5.40462 11.4065 5.79131 11.9529 6.31841C11.9529 6.31841 11.9529 6.31841 12.0435 6.31841C12.7014 5.68487 13.531 5.25916 14.4289 5.09436C14.7912 5.0192 15.1614 4.98875 15.531 5.00369C16.5287 5.04834 17.4859 5.41122 18.2628 6.03928C19.0397 6.66735 19.5955 7.52767 19.849 8.4945C19.951 8.86356 20.0018 9.24493 19.9999 9.62787V9.62787Z"
          fill="#EB1D82"
        />
      </Svg>
    );
  }

  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.0067 6.37794L12.5809 5.91091C13.2178 5.45172 13.9613 5.16142 14.7416 5.06725C15.689 4.94739 16.6506 5.11819 17.4982 5.55689C18.3458 5.9956 19.0392 6.68139 19.4861 7.52291C19.9291 8.36967 20.0917 9.33457 19.9505 10.2792C19.8093 11.2238 19.3717 12.0995 18.7004 12.7807C18.1111 13.3833 17.4916 13.9709 16.8872 14.5584L15.8295 15.613L13.6386 17.8276L12.7169 18.7315C12.5298 18.9041 12.2843 19 12.0294 19C11.7745 19 11.529 18.9041 11.3419 18.7315C10.9641 18.37 10.5864 18.0084 10.2238 17.6318L7.85151 15.3268L6.49163 13.986L5.37349 12.9012C4.68186 12.2348 4.22586 11.3625 4.07404 10.4155C3.94653 9.72786 3.98411 9.01993 4.1837 8.3496C4.3833 7.67926 4.73924 7.06556 5.2224 6.55873C5.94134 5.73671 6.93415 5.20163 8.01772 5.05219C8.72134 4.94607 9.44 5.00226 10.1184 5.21642C10.7969 5.43058 11.417 5.79701 11.9312 6.28755L12.0067 6.37794ZM12.0067 16.6224L12.7471 15.8993L14.1221 14.5584L16.313 12.4041L17.2196 11.5303C17.6658 11.1017 17.9488 10.5319 18.0205 9.9183C18.0669 9.51673 18.0156 9.10991 17.871 8.73228C17.7263 8.35465 17.4925 8.01733 17.1894 7.74889C16.9214 7.49028 16.6 7.29297 16.2478 7.17069C15.8955 7.04842 15.5208 7.0041 15.1496 7.04082C14.5431 7.05773 13.9634 7.29323 13.5177 7.70369C13.2306 7.94474 12.9738 8.21592 12.7018 8.47203C12.609 8.56586 12.4984 8.64037 12.3765 8.69123C12.2546 8.74209 12.1238 8.76828 11.9916 8.76828C11.8595 8.76828 11.7286 8.74209 11.6067 8.69123C11.4848 8.64037 11.3742 8.56586 11.2814 8.47203L10.6166 7.79409C10.3248 7.50489 9.96937 7.28757 9.57853 7.15941C9.18769 7.03126 8.77224 6.99581 8.36525 7.05588C7.74345 7.1277 7.16895 7.42214 6.74849 7.88448C6.51494 8.12709 6.33191 8.41342 6.20996 8.72695C6.08801 9.04048 6.02957 9.37499 6.038 9.71116C6.04643 10.0473 6.12156 10.3785 6.25907 10.6856C6.39658 10.9926 6.59373 11.2695 6.83915 11.5002L8.63722 13.2628L10.0122 14.6187L11.6894 16.2759C11.7974 16.3849 11.8984 16.5006 11.9916 16.6224H12.0067Z"
        fill={color ? color : '#000'}
      />
    </Svg>
  );
};

export default FavoriteIcon;
