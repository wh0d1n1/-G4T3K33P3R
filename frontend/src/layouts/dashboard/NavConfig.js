// component
import Iconify from '../../components/Iconify';
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = [
  {
    title: 'dashboard',
    icon: ICONS.dashboard,
    children: [
    { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
    { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
{ title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
 { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
{ title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    ],
  },
  {
    title: 'blog',
    path: PATH_DASHBOARD.blog.root,
    icon: ICONS.blog,
    children: [
      { title: 'posts', path: PATH_DASHBOARD.blog.posts },
      { title: 'post', path: PATH_DASHBOARD.blog.demoView },
      { title: 'create', path: PATH_DASHBOARD.blog.new },
    ],
  },
  {
    title: 'user',
    path: PATH_DASHBOARD.user.root,
    icon: ICONS.user,
    children: [
      { title: 'profile', path: PATH_DASHBOARD.user.profile },
      { title: 'cards', path: PATH_DASHBOARD.user.cards },
      { title: 'list', path: PATH_DASHBOARD.user.list },
      { title: 'create', path: PATH_DASHBOARD.user.new },
      { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      { title: 'account', path: PATH_DASHBOARD.user.account },
    ],
  },
  {
    title: 'chat',
    path: '/dashboard/chat',
    icon: ICONS.chat,
  },
  {
    title: 'mail',
    path: '/dashboard/mail',
    icon: ICONS.mail,
  },
  {
    title: 'calendar',
    path: '/dashboard/calendar',
    icon: ICONS.booking,
  },
];

export default navConfig;
