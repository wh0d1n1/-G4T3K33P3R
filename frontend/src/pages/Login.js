import { Link as RouterLink } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';

// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';

import { LoginForm } from '../sections/auth/login';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 700,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(0, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 300,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <RootStyle>
        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Take to the stars!
            </Typography>
            <svg
              className="rocketManSVG"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 900 900"
            >
              <defs>
                <path
                  id="rocketClip"
                  d="M300,465.7L300,465.7c-13.8,0-25-11.3-25-25V249.4c0-13.7,11.3-25,25-25h0c13.7,0,25,11.2,25,25v191.3 C325,454.5,313.8,465.7,300,465.7z"
                />
                <circle id="bubbble" cx="0" cy="0" r="8" />
                <clipPath id="rainbowClip">
                  <use xlinkHref="#rocketClip" overflow="visible" />
                </clipPath>
                <symbol id="badge">
                  <circle
                    fill="#1668B2"
                    stroke="#EF3D43"
                    strokeWidth="1.4389"
                    strokeMiterlimit="10"
                    cx="319.6"
                    cy="288.9"
                    r="8.7"
                  />
                  <g>
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M319.6,294.7L319.6,294.7c-1.7,0-2.8-0.9-2.6-1.9c0.5-2.6,0.9-5.2,1.4-7.8c0.2-1,0.4-2.8,1.2-2.8 c0,0,0,0,0,0c0.8,0,1,1.8,1.2,2.8c0.5,2.6,0.9,5.2,1.4,7.8C322.5,293.8,321.3,294.6,319.6,294.7z"
                      />
                    </g>
                    <path
                      fill="#FFFFFF"
                      d="M316.4,294.2L316.4,294.2c-0.4,0-0.8-0.3-0.8-0.8v-3.3c0-0.4,0.3-0.8,0.8-0.8l0,0c0.4,0,0.8,0.3,0.8,0.8 v3.3C317.2,293.9,316.9,294.2,316.4,294.2z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M322.8,294.2L322.8,294.2c-0.4,0-0.7-0.3-0.7-0.7v-3.3c0-0.4,0.3-0.7,0.7-0.7l0,0c0.4,0,0.7,0.3,0.7,0.7 v3.3C323.6,293.9,323.2,294.2,322.8,294.2z"
                    />
                  </g>
                  <g>
                    <circle fill="#FFFFFF" cx="314" cy="288.3" r="0.7" />
                    <ellipse fill="#FFFFFF" cx="314" cy="288.3" rx="0.1" ry="1.2" />
                    <ellipse fill="#FFFFFF" cx="314" cy="288.3" rx="1.3" ry="0.1" />
                  </g>
                  <g>
                    <circle fill="#FFFFFF" cx="324.8" cy="286.4" r="0.7" />
                    <ellipse fill="#FFFFFF" cx="324.8" cy="286.4" rx="0.1" ry="1.2" />
                    <ellipse fill="#FFFFFF" cx="324.8" cy="286.4" rx="1.3" ry="0.1" />
                  </g>
                </symbol>
              </defs>
              <rect x="275" y="263.3" clipPath="url(#rainbowClip)" fill="#CC583F" width="10" height="212.7" />
              <rect x="285" y="263.3" clipPath="url(#rainbowClip)" fill="#ECB447" width="10" height="212.7" />
              <rect x="295" y="263.3" clipPath="url(#rainbowClip)" fill="#75C095" width="10" height="212.7" />
              <rect x="305" y="263.3" clipPath="url(#rainbowClip)" fill="#5991AA" width="10" height="212.7" />
              <rect x="315" y="263.3" clipPath="url(#rainbowClip)" fill="#7D6AAD" width="10" height="212.7" />
              <g className="astronaut">
                <g className="pulseSVG" opacity="0.2" stroke="#ededed">
                  <path
                    className="pulse"
                    fill="none"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M289.9,188.7 c5.2-5.2,13.7-5.2,18.9,0"
                  />
                  <path
                    className="pulse"
                    fill="none"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M285.6,184.5 c7.6-7.6,19.8-7.6,27.4,0"
                  />
                  <path
                    className="pulse"
                    fill="none"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M281.4,180.3  c9.9-9.9,26-9.9,35.9,0"
                  />
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        fill="#CCCCCC"
                        d="M265,320.7c0,0,0.1,0,0.1,0h0.2c0,0,0,0,0,0l0.2,0c0,0,0,0,0,0v-16.1h-21.4c0.9,3.7,2.8,6.9,5.6,9.8
      C254,318.6,259.1,320.7,265,320.7 M334.9,320.7c0,0,0.1,0,0.1,0c5.9,0,11-2.1,15.2-6.3c2.9-2.9,4.7-6.1,5.6-9.8h-21.4v16.1
      l0.2,0c0,0,0,0,0,0h0h0H334.9 M271.8,224.4c-4.3,0.9-8.1,2.9-11.4,6.2c-4.5,4.5-6.7,9.9-6.7,16.2v13.6c3.3-2.1,7.1-3.2,11.3-3.2
      h0c0.9,0,1.7,0,2.6,0.1c-1.5-3.9-2.3-8.2-2.3-12.7C265.3,237,267.5,230.3,271.8,224.4 M346.3,260.4v-13.6
      c0-6.3-2.2-11.7-6.7-16.2c-3-3-6.5-5.1-10.4-6l-0.2,0.8c3.9,5.6,5.8,12,5.8,19.2c0,4.2-0.7,8.1-2,11.8l0.1,0.8
      c0.7-0.1,1.4-0.1,2.2-0.1h0C339.2,257.2,342.9,258.3,346.3,260.4z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M299.9,210.1c0,0-0.1,0-0.1,0c-9.5,0-17.6,3.4-24.3,10.1c-1.3,1.3-2.5,2.7-3.6,4.2
      c-4.3,5.9-6.5,12.6-6.5,20.3c0,4.6,0.8,8.8,2.3,12.7c0.2,0.6,0.5,1.2,0.8,1.8c1.7,3.6,4,6.9,7.1,9.9c3.3,3.3,6.8,5.7,10.7,7.4
      c0.1,0,0.2,0.1,0.2,0.1c0.8,0.3,1.6,0.7,2.5,0.9c3.4,1.1,7.1,1.7,11,1.7c9.5,0,17.7-3.4,24.4-10.1c3.6-3.6,6.2-7.5,7.9-11.8
      c0.1-0.3,0.2-0.6,0.3-0.9c1.3-3.6,1.9-7.6,1.9-11.7c0-7.2-1.9-13.5-5.7-19.1l-0.2-0.2c0,0,0-0.1-0.1-0.1l0,0l-0.1-0.1l-0.1-0.1
      c0,0,0,0,0,0l-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c-1.1-1.5-2.3-2.9-3.7-4.3C317.5,213.5,309.4,210.1,299.9,210.1
       M350.1,263.5c-1.2-1.2-2.5-2.3-3.9-3.1c-3.3-2.1-7.1-3.2-11.3-3.2h0c-0.7,0-1.5,0-2.2,0.1c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0
      l-0.3-0.1c-1.7,4.3-4.3,8.3-7.9,11.8c-6.7,6.7-14.9,10.1-24.4,10.1c-3.9,0-7.6-0.6-11-1.7c-0.8-0.3-1.7-0.6-2.5-0.9
      c-0.1,0-0.2-0.1-0.2-0.1c-3.9-1.7-7.5-4.2-10.7-7.4c-3-3-5.4-6.3-7.1-9.9c-0.3-0.6-0.5-1.2-0.8-1.8c-0.8-0.1-1.7-0.1-2.6-0.1h0
      c-4.2,0-8,1.1-11.3,3.2c-1.4,0.9-2.7,1.9-3.9,3.1c-4.2,4.2-6.3,9.2-6.3,15.2v20.6c0,1.9,0.2,3.7,0.6,5.4h21.4v-22.6v22.6v16.1
      V338c0.6,3.3,2.2,6.2,4.7,8.7c3.3,3.4,7.3,5,12,5c4.7,0,8.9-1.8,12.7-5.3c2.8-2.6,4.5-5.5,5-8.7v-15.9h-12.7H300h13h-13v15.9
      c0.5,3.2,2.2,6.1,5,8.7c3.8,3.5,8,5.3,12.7,5.3c4.7,0,8.7-1.7,12-5c2.5-2.5,4-5.4,4.7-8.7v-17.3v-16.1v-22.6v22.6h21.4
      c0.4-1.7,0.6-3.5,0.6-5.4v-20.6C356.4,272.8,354.3,267.7,350.1,263.5 M300,311.1v-30.1V311.1z"
                      />
                      <path
                        fill="#2D2D2D"
                        d="M299.7,195.5c-1.1,0-2,0.4-2.7,1.1c-0.7,0.7-1.1,1.6-1.1,2.7c0,1.1,0.4,2,1.1,2.7
      c0.7,0.7,1.6,1.1,2.7,1.1c1.1,0,2-0.4,2.7-1.1c0.7-0.7,1.1-1.6,1.1-2.7c0-1.1-0.4-2-1.1-2.7
      C301.7,195.8,300.8,195.5,299.7,195.5z"
                      />
                    </g>
                  </g>
                  <path
                    fill="none"
                    stroke="#2D2D2D"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M355.8,304.6
  c0.4-1.7,0.6-3.5,0.6-5.4v-20.6c0-5.9-2.1-11-6.3-15.2c-1.2-1.2-2.5-2.3-3.9-3.1c-3.3-2.1-7.1-3.2-11.3-3.2h0
  c-0.7,0-1.5,0-2.2,0.1c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0 M332.1,257.3c-1.7,4.3-4.3,8.3-7.9,11.8c-6.7,6.7-14.9,10.1-24.4,10.1
  c-3.9,0-7.6-0.6-11-1.7c-0.8-0.3-1.7-0.6-2.5-0.9c-0.1,0-0.2-0.1-0.2-0.1c-3.9-1.7-7.5-4.2-10.7-7.4c-3-3-5.4-6.3-7.1-9.9
  c-0.3-0.6-0.5-1.2-0.8-1.8c-0.8-0.1-1.7-0.1-2.6-0.1h0c-4.2,0-8,1.1-11.3,3.2c-1.4,0.9-2.7,1.9-3.9,3.1c-4.2,4.2-6.3,9.2-6.3,15.2
  v20.6c0,1.9,0.2,3.7,0.6,5.4h21.4v-22.6 M346.3,260.4v-13.6c0-6.3-2.2-11.7-6.7-16.2c-3-3-6.5-5.1-10.4-6 M328.9,225.4
  c3.9,5.6,5.8,12,5.8,19.2c0,4.2-0.7,8.1-2,11.8 M299.7,203.1c-1.1,0-2-0.4-2.7-1.1c-0.7-0.7-1.1-1.6-1.1-2.7c0-1.1,0.4-2,1.1-2.7
  c0.7-0.7,1.6-1.1,2.7-1.1c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.6,1.1,2.7c0,1.1-0.4,2-1.1,2.7C301.7,202.7,300.8,203.1,299.7,203.1
  v7.1c0,0,0.1,0,0.1,0c9.5,0,17.7,3.4,24.4,10.1c1.4,1.4,2.6,2.8,3.7,4.3c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2l0.1,0.1
  c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0l0.1,0.1l0,0c0,0,0,0,0.1,0.1l0.2,0.2c3.8,5.6,5.7,12,5.7,19.1
  c0,4.2-0.6,8.1-1.9,11.7c-0.1,0.3-0.2,0.6-0.3,0.9 M329.2,224.6L329.2,224.6C329.1,224.6,329.1,224.6,329.2,224.6
  C329.1,224.6,329.1,224.6,329.2,224.6c-0.3-0.1-0.6-0.1-0.8-0.2c0,0-0.1,0-0.2,0c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1
  c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0,0,0,0l0,0c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0,0,0,0 M271.8,224.4c1.1-1.4,2.3-2.8,3.6-4.2
  c6.7-6.7,14.8-10.1,24.3-10.1 M253.7,260.4v-13.6c0-6.3,2.2-11.7,6.7-16.2c3.3-3.3,7.1-5.4,11.4-6.2c-4.3,5.9-6.5,12.6-6.5,20.3
  c0,4.6,0.8,8.8,2.3,12.7 M332.7,256.5C332.7,256.5,332.7,256.5,332.7,256.5L332.7,256.5c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1l-0.2,0.5
  c0,0.1-0.1,0.1-0.1,0.2 M334.7,320.7h0.2c0,0,0.1,0,0.1,0c5.9,0,11-2.1,15.2-6.3c2.9-2.9,4.7-6.1,5.6-9.8h-21.4v16.1l0.2,0
   M334.6,320.7L334.6,320.7 M287.3,321.8H300h13 M300,337.8c0.5,3.2,2.2,6.1,5,8.7c3.8,3.5,8,5.3,12.7,5.3c4.7,0,8.7-1.7,12-5
  c2.5-2.5,4-5.4,4.7-8.7v-17.3 M265.6,320.7V338c0.6,3.3,2.2,6.2,4.7,8.7c3.3,3.4,7.3,5,12,5c4.7,0,8.9-1.8,12.7-5.3
  c2.8-2.6,4.5-5.5,5-8.7v-15.9 M265.6,320.7C265.6,320.7,265.6,320.7,265.6,320.7l-0.3,0c0,0,0,0,0,0h-0.2c0,0-0.1,0-0.1,0
  c-5.9,0-11-2.1-15.2-6.3c-2.9-2.9-4.7-6.1-5.6-9.8 M265.6,304.6v16.1 M334.4,282.1v22.6 M300,311.1v-30.1"
                  />
                </g>
                <g>
                  <path
                    fill="#7592A0"
                    d="M324.5,261.6c6.8-4.3,10.2-9.5,10.2-15.5c0-5.1-2.4-9.6-7.2-13.4H272c-4.8,3.8-7.3,8.3-7.3,13.4
  c0,6.1,3.4,11.2,10.2,15.5c6.8,4.3,15.1,6.4,24.7,6.4C309.4,268,317.6,265.9,324.5,261.6z"
                  />
                </g>
                <path
                  fill="none"
                  stroke="#2D2D2D"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M334.7,246.1 c0,6.1-3.4,11.2-10.2,15.5c-6.8,4.3-15.1,6.4-24.7,6.4c-9.7,0-17.9-2.1-24.7-6.4c-6.8-4.3-10.2-9.5-10.2-15.5 c0-5.1,2.4-9.6,7.3-13.4h55.5C332.3,236.5,334.7,241,334.7,246.1z"
                />
                <path
                  fill="none"
                  stroke="#E6E6E6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M323.5,240.6c2.4,3.5,2.4,7.8,0,12.7 M275.8,240.6c-2.4,3.5-2.4,7.8,0,12.7"
                />
                <g className="jetBubbles">
                  <g id="greyJets" fill="#2d2d2d">
                    <circle className="jetBubble" cx="289" cy="489" r="23" />
                    <circle className="jetBubble" cx="270" cy="470" r="20" />
                    <circle className="jetBubble" cx="319" cy="483" r="21" />
                  </g>
                  <g id="colorJets" strokeWidth="0" stroke="#3d3d3d">
                    <circle className="jetBubble" fill="#ECB447" cx="312" cy="449" r="8" />
                    <circle className="jetBubble" fill="#7D6AAD" cx="320" cy="480" r="10" />
                    <circle className="jetBubble" fill="#7D6AAD" cx="290" cy="460" r="10" />
                    <circle className="jetBubble" fill="#ECB447" cx="329" cy="453" r="11" />
                    <circle className="jetBubble" fill="#CC583F" cx="286" cy="463" r="7" />
                    <circle className="jetBubble" fill="#ECB447" cx="289" cy="469" r="24" />
                    <circle className="jetBubble" fill="#7D6AAD" cx="260" cy="450" r="20" />
                    <circle className="jetBubble" fill="#5991AA" cx="319" cy="463" r="10" />
                    <circle className="jetBubble" fill="#CC583F" cx="290" cy="463" r="18" />
                    <circle className="jetBubble" fill="#75C095" cx="312" cy="443" r="21" />
                    <circle className="jetBubble" fill="#5991AA" cx="275" cy="443.4" r="12" />
                  </g>
                </g>
              </g>
            </svg>
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h2" gutterBottom>
              Sign In
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>

            <LoginForm />

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
