/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 * https://www.raywenderlich.com/247-react-native-tutorial-building-android-apps-with-javascript
 */

import { AppRegistry } from 'react-native';
import App from './Components/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
