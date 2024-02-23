import { CHAT_TYPE } from '@app/constants';
import images from '../assets/images';
import Home from '../features/home';
import Profile from '../features/profile';
import Reels from '../features/reels';
import Search from '../features/search';
import {CHATS, NOTIFICATIONS} from '../navigation/screenNames';

export const BOTTOM_TAB_CONFIG = [
  {id: 0, name: 'Home', screen: Home, icon: images.home_icon},
  {id: 1, name: 'Search', screen: Search, icon: images.search_icon},
  {id: 2, name: 'Add Post', screen: Search, icon: images.add_icon},
  {id: 3, name: 'Reels', screen: Reels, icon: images.video_icon},
  {id: 4, name: 'Profile', screen: Profile, icon: images.me},
];

export const HOME_HEADER_CONFIG = [
  {id: 0, name: NOTIFICATIONS, icon: images.notification_icon},
  {id: 1, name: CHATS, icon: images.chat_icon},
];

export const POST_ACTION_CONFIG = [
  {id: 0, name: 'like', source: images.notification_icon},
  {id: 1, name: 'comment', source: images.comment_icon},
  {id: 2, name: 'share', source: images.share_icon},
];

export const REEL_ACTION_CONFIG = [
  {id: 0, name: 'likes', source: images.notification_icon, quantity: '203K'},
  {id: 1, name: 'comment', source: images.comment_icon, quantity: '203K'},
  {id: 2, name: 'share', source: images.share_icon, quantity: '203K'},
  {id: 3, name: 'more', source: images.more_icon},
];

export const CHAT_LIST_HEADER_CONFIG = [
  {id: 0, name: 'more', source: images.more_horizontal_icon},
  {id: 1, name: 'stats', source: images.stats_icon},
  {id: 2, name: 'new', source: images.edit_icon},
];

export const CHAT_CATEGORY_CONFIG = [
  {id: 0, name: 'Primary', type: CHAT_TYPE.PRIMARY},
  {id: 1, name: 'General', type: CHAT_TYPE.GENERAL},
  {id: 2, name: 'Requests', type: CHAT_TYPE.REQUESTS},
];

export const PERSON_CHAT_CONFIG = [
  {id: 0, name: 'phone_call', source: images.phone_call_icon},
  {id: 1, name: 'video_call', source: images.video_call_icon},
  {id: 2, name: 'flag', source: images.flag_icon},
];
