import { css } from 'emotion';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import base from 'theme';
import { Col } from 'theme/system';
import { AdminContent, AdminHeaderH1 } from 'theme/adminStyles';
import { brandPrimaryHighlightHover } from 'theme/hoverStyles';

const {
  fonts: { libreFranklin },
  keyedPalette: { brandPrimary, porcelain, white, mineShaft, silver },
  transparency: { white70 },
} = base;

const borderColour = porcelain;
const activeNavItemIconColor = mineShaft;
const disabledNavItemIconColor = silver;

export { brandPrimary, activeNavItemIconColor, disabledNavItemIconColor };

export const AdminModelNav = styled(Col)`
  width: 164px;
  label: admin-model-nav;
`;

const activeNavItem = css`
  color: ${mineShaft};
  background: ${white};
  border: solid 1px ${borderColour};
  border-right-color: ${white};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* Extending it over 1 pixel to match design (cover other border) */
  z-index: 2;
  position: relative;
  width: 165px;
  label: admin-model-nav-item-active;

  &:hover {
    color: ${mineShaft};
  }
`;

const disabledNavItem = css`
  color: ${disabledNavItemIconColor};
  cursor: not-allowed;
  label: admin-model-nav-item-disabled;
`;

export const NavItem = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 19px 15px;
  font-family: ${libreFranklin};
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  label: admin-model-nav-item;
  ${brandPrimaryHighlightHover};
  ${({ active }) => active && activeNavItem};
  ${({ disabled }) => disabled && disabledNavItem};
`;

export const navItemIcon = css`
  width: 30px;
  height: 30px;
  margin-right: 9px;
  fill: ${brandPrimary};
  label: admin-model-nav-item-icon;
`;

export const navItemIconActive = css`
  ${navItemIcon};
  fill: ${activeNavItemIconColor};
  label: admin-model-nav-item-icon-active;
`;

export const AdminModelContent = styled(AdminContent)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 164px);
  min-height: 416px;
  z-index: 1;
  padding: 7px 8px;
  label: admin-model-content;
`;

export const ModelHeaderH1 = styled(AdminHeaderH1)`
  margin-right: 18px;
  label: admin-model-header-h1;
`;

export const ModelHeaderBackLink = styled(Link)`
  ${brandPrimaryHighlightHover};
  font-family: ${libreFranklin};
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  label: admin-model-header-back-link;
`;

export const Loading = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${white70};
  z-index: 9999;
`;
