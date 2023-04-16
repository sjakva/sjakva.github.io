import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
// import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, rem } from '@mantine/core';
import { Dots, BrandGithub, Mail, BrandLinkedin } from 'tabler-icons-react';

import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { Check } from 'tabler-icons-react';
import image from './image.svg';

const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: '#7a5d85' }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
  }));

interface ContainerProps {
    // name: string;
  }
  
const AboutCard: React.FC<ContainerProps> = ({ }) => {

    const email = 'JakvaniShoaib.dev@gmail.com'
    // About Card


    const classes = useStyles();
    return (
        // <Card withBorder shadow="sm" radius="md">
        //      <IonCardHeader>
        //         <IonCardTitle>
        //             {/* Shoaib Jakvani */}
        //             <Text component="span" inherit color="#7a5d85"> Shoaib </Text> 
        //             {" "} 
        //             <Text component="span" inherit color="#34273b"> Jakvani </Text>
        //         </IonCardTitle>
        //         <IonCardSubtitle>{email}</IonCardSubtitle>
        //      </IonCardHeader>
        //     <Group position="left">
        //         <Menu withinPortal position="bottom-end" shadow="sm">
        //         <Menu.Target>
        //             <ActionIcon>
        //             <Dots size="1rem" />
        //             </ActionIcon>
        //         </Menu.Target>
    
        //         <Menu.Dropdown>
        //             <Menu.Item icon={<Mail size={rem(18)} href={"mailto:"+email} />}>Contact Me</Menu.Item>
        //             <Menu.Item icon={<BrandLinkedin size={rem(18)} href="https://www.linkedin.com/in/shoaib-jakvani" />}>View LinkedIn</Menu.Item>
        //             <Menu.Item icon={<BrandGithub size={rem(18)} href="https://github.com/sjakva" />}>View Github</Menu.Item>
        //         </Menu.Dropdown>
        //         </Menu>
        //     </Group>
    
        //     <Card.Section mt="sm" py='xs' p>
        //         <Image width={400} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU" px='xs' py='xs' />
        //     </Card.Section>
        // </Card>

        <Container>
        <div className={classes.classes.inner}>

          <div className={classes.classes.content}>
            <Title color='#447b65' className={classes.classes.title}>
              Shoaib Jakvani 
            </Title>
            <Text color="#7a5d85" mt="md">
              {email}
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.classes.control}>
                Contact Me
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.classes.control}>
                LinkedIn
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.classes.control}>
                GitHub
              </Button>
            </Group>
          </div>

          <Image height={300} width={200} src={'https://ih1.redbubble.net/image.1270577318.3034/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'} className={classes.classes.image} />
        
        </div>
      </Container>
    )

  };
  
  export default AboutCard;
  