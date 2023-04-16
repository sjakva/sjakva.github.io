import { IonApp, IonContent, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import "./components/IonicCard.css";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AboutCard from './components/AboutCard';
import ExperienceCard from './components/ExperienceCard';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/* <Menu /> */}

          {/* React Router */}
          <IonRouterOutlet id="main">

            {/* localhost:8100 redirects to home page which leads to about-me */}
            <Route path="/" exact={true}>
              {/* <Redirect to="/folder/Inbox" /> */}
              {/* <Redirect to="/page/about" /> */}
              <IonContent>
                <AboutCard />
                <ExperienceCard />
              </IonContent>

            </Route>

{/* 
            <Route path="/page/:name" exact={true}>
              <Page  />
            </Route> */}

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
