// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  action: PropTypes.node,
  description: PropTypes.string,
  img: PropTypes.node,
  title: PropTypes.string,
};

export default function AppWelcome({ title, description, action, img, ...other }) {
  return (
 
      <iframe title="todo" style={{border:"0"}} width="100%" height="1000px" src="https://tasksboard.com/app/?shareList=MTAzMzAxMTMzNDY4MTM3NDg4NTY6MDow&u=NiRwMRrlRScEW0LLOM0BtUIJuk62"></iframe>

  );
}
