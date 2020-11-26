/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Calendars from './components/HistoryHome/Canlendars';
import HistoryHome from './screens/History/HistoryHome';
import StatisticalHome from './screens/Statistical/StatisticalHome'

AppRegistry.registerComponent(appName, () => App);
