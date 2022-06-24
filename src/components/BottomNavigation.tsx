import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  IconBrowsing,
  IconMessage,
  IconProfile,
  IconTravel,
  IconWishList,
} from '../assets/svgIcons/BottomNavigationIcons';

interface Nav {
  url: string;
  icon: JSX.Element;
  text: string;
}

interface NavigationProps {
  nav: Nav;
}

const StNav = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;

  padding: 10px 13px;
  font-size: 10px;
`;

function Navigation(props: NavigationProps) {
  const { nav } = props;
  const { url, icon, text } = nav;

  return (
    <StNav to={url}>
      {icon}
      <span>{text}</span>
    </StNav>
  );
}

const StBottomNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export default function Test() {
  const navigationList = [
    {
      url: '/browse',
      icon: <IconBrowsing />,
      text: '둘러보기',
    },
    {
      url: '/wish-list',
      icon: <IconWishList />,
      text: '위시리스트',
    },
    {
      url: '/travel',
      icon: <IconTravel />,
      text: '여행',
    },
    {
      url: '/message',
      icon: <IconMessage />,
      text: '메시지',
    },
    {
      url: '/profile',
      icon: <IconProfile />,
      text: '프로필',
    },
  ];

  return (
    <StBottomNavigation>
      {navigationList.map((nav) => (
        <Navigation key={nav.text} nav={nav} />
      ))}
    </StBottomNavigation>
  );
}

// const StMain = styled.main`
//   display: flex;
//   justify-content: center;

//   min-width: 320px;
//   max-width: 375px;
// `;
