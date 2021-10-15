// outsource dependencies
import { createBrowserHistory } from 'history';

// NOTE export history outside to be able dispatch navigation actions from anywhere!
export const history = createBrowserHistory();
