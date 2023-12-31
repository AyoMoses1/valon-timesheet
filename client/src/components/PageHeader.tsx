import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useLocation, useNavigate } from 'react-router-dom';

import breakPoints from '../utils/breakPoints';
import paths from './paths';

const PageHeader = (props: { title: string }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const currentPage = Object.keys(paths).find(
      (key) => paths[key] === location.pathname
    );
    if (currentPage) {
      setPageTitle(currentPage);
    }
  }, [location.pathname]);
  const [isLargerThan1500] = useMediaQuery(breakPoints.laptopL);

  const handleLogOut = () => {
    localStorage.removeItem('jwt_token')
    localStorage.removeItem('user')
    localStorage.removeItem('userId')
    navigate('/login')
  }

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        pl={isLargerThan1500 ? 20 : 10}
        bgColor="dark.grey"
      >
        <Text variant="whiteBoldNormal" color="dark.primary">
          {pageTitle.replace(/^\w/, (c) => c.toUpperCase())}
        </Text>
        <HStack align="center">
          <Button variant="primary" onClick={handleLogOut}>Log Out</Button>
          <Button variant="secondary">Get Started</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PageHeader;
