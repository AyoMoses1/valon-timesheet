import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { ButtonStyle as Button } from './components/Button';
import { ProgressStyle as Progress } from './components/Progress';
import { HeadingStyle as Heading } from './components/Heading';
import { InputStyle as Input } from './components/Input';
import { formLabelStyle as FormLabel } from './components/FormLabel';
import { TextStyle as Text } from './components/Text';
import { LinkStyle as Link } from './components/Link';
import { tokens as colors }from './styles';

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // Small screens (up to 480px)
    md: '48em', // Medium screens (up to 768px)
    lg: '62em', // Large screens (up to 992px)
    xl: '80em', // Extra-large screens (up to 1200px)
  },

  colors,
  fonts: {
    heading: 'Inter, sans-serif',
  },

  components: {
    Button,
    Input,
    FormLabel,
    Text,
    Link,
    Heading,
    Progress,
  },

  textStyles: {
    normal: {
      fontSize: { base: '16px', lg: '1.2vw' },
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
  },

  layerStyles: {
    card: {
      backgroundColor: 'white',
      borderRadius: 'md',
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        fontSize: ['sm', 'md'],
        color: props.theme.colors.gray[600],
        lineHeight: 'tall',
        backgroundColor: 'gray2',
        fontFamily: 'Poppins, sans-serif'
      },
      button: {
        fontFamily: 'Inter, sans-serif',
      },
    }),
  },
});

export default theme;
