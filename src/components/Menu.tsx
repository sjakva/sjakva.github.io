import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { briefcase, briefcaseSharp, desktop, link, linkSharp, person, personSharp, school, schoolSharp, } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'About Me',
    url: '/page/about',
    iosIcon: person,
    mdIcon: personSharp
  },
  {
    title: 'Education',
    url: '/page/education',
    iosIcon: school,
    mdIcon: schoolSharp
  },
  {
    title: 'Experience',
    url: '/page/experience',
    iosIcon: briefcase,
    mdIcon: briefcaseSharp
  },
  {
    title: 'Projects',
    url: '/page/projects',
    iosIcon: desktop,
    mdIcon: desktop
  },
  {
    title: 'Links',
    url: '/page/links',
    iosIcon: link,
    mdIcon: linkSharp
  },
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="push">
      <IonContent>
        <IonList id="site-nav">

          <IonListHeader>Shoaib Jakvani</IonListHeader>
          <IonNote>JakvaniShoaib.dev@gmail.com</IonNote>
          
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} 
                routerLink={appPage.url} 
                routerDirection="none" 
                lines="none" 
                detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
