export const hamburgerIconUrl =
  "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256";
export const youtubeLogo =
  "https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png";

export const searchIcon =
  "https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg";

export const userIcon =
  "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png";

export const ytShortsIcon =
  "https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png";

export const homeIcon =
  "https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png";

export const userWorkingOnLaptop =
  "https://ekarigartech.com/wp-content/uploads/2017/12/use-computer-png-800.png";

const subscriptionIcon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s";
export const sidePanelIcons = [
  {
    name: "Home",
    url: homeIcon,
    height: 4,
    width: 8,
  },
  {
    name: "Shorts",
    url: ytShortsIcon,
    height: 6,
    width: 7,
  },
  {
    name: "Subscriptions",
    url: subscriptionIcon,
    height: 6,
    width: 6,
  },
];

export const subcriptions = [
  {
    imgUrl:
      "https://yt3.ggpht.com/mR4d9sOINdICVY5lbTmsyV1NG2JRzYcvDrC8isQQqdct5YbQ3vQ0acJhL7PIJKiIOaVM2yZJbg=s88-c-k-c0x00ffffff-no-rj",
    name: "Crime Tak",
    height: 6,
    width: 6,
  },
  {
    imgUrl:
      "https://yt3.ggpht.com/4tpv3CE1alB7ayIk-y1ktHsang1dMJkGf4f4dazy55G8j8Y0nGkEYnxNJ30JYOiPf6cCaaMARQ=s88-c-k-c0x00ffffff-no-rj",
    name: "Lallantop",
    height: 6,
    width: 6,
  },
  {
    imgUrl:
      "https://yt3.ggpht.com/ytc/AIdro_lqpTX-PfEcpcKqh8-_2mVyD5WsXPfpYHl5xWOJKFJoAVo=s88-c-k-c0x00ffffff-no-rj",
    name: "Indian Express",
    height: 6,
    width: 6,
  },
  {
    imgUrl:
      "https://yt3.ggpht.com/ytc/AIdro_lg4F-cAjPawqprjSRRiE_P_WzONwz3o4lroqonI5Rz4A=s88-c-k-c0x00ffffff-no-rj",
    name: "Loose Talk",
    height: 6,
    width: 6,
  },
  {
    imgUrl:
      "https://yt3.ggpht.com/bOmqDNEBUJods7e6RnKi8ML_8-IW39uBuHwURGrPstqnu3X_iyO02EedWwQx2jpvBpK9HNax=s88-c-k-c0x00ffffff-no-rj",
    name: "National Geographic",
    height: 6,
    width: 6,
  },
];

export const filterButtonsList = [
  "All",
  "News",
  "Music",
  "Trailers",
  "Podcasts",
  "Live",
  "Courts",
  "Thoughts",
  "Thrillers",
  "Restuarants",
];

export const YT_API_KEY = "AIzaSyA7ruEghcDPLalmwth0wOKY8ZvkUbxp27s";

export const youtubeVideoAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  YT_API_KEY;

export const searchSuggestionsAPI = ` http://suggestqueries.google.com/complete/search?client=firefox&s=yt&key=${YT_API_KEY}`;
export const getVideoDetailsURL = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=`;

export const commentsList = [
  {
    name: "Alice",
    text: "This is the first comment...",
    id: "1",
    replies: [
      {
        name: "Bob",
        text: "Replying to Alice...",
        id: "23",
        replies: [
          {
            name: "Charlie",
            text: "Replying to Bob.",
            id: "3",
            replies: [],
          },
          {
            name: "David",
            text: "Replying to Bob.",
            id: "4",
            replies: [],
          },
          {
            name: "David John",
            text: "Replying to Bob John.",
            id: "4",
            replies: [],
          },
          {
            name: "David John",
            text: "Replying to Bob John.",
            id: "4",
            replies: [],
          },
        ],
      },
      {
        name: "David",
        text: "Another reply to Alice.",
        id: "5",
        replies: [],
      },
    ],
  },
  {
    name: "Eve",
    text: "This is another comment.",
    id: "6",
    replies: [
      {
        name: "Frank",
        text: "Replying to Eve.",
        id: "7",
        replies: [],
      },
    ],
  },
  {
    name: "Alice",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at quam vitae leo tincidunt accumsan. Integer tristique ligula id arcu efficitur, in feugiat dui consequat. Curabitur posuere, lacus id convallis pharetra, sapien leo venenatis elit, id scelerisque lorem ipsum non lacus. Aliquam erat volutpat. Proin nec egestas justo. Donec consectetur sit amet magna in varius. Sed facilisis risus ut sapien lacinia, non egestas est elementum. Pellentesque suscipit, eros et porttitor viverra, velit nisl varius ligula, vel dictum sem augue sed nunc.",
    replies: [
      {
        name: "Bob",
        text: "Vivamus ullamcorper leo sit amet nulla dapibus, a malesuada urna sodales. Maecenas euismod, augue vel vehicula hendrerit, dui risus convallis mi, ut fermentum purus nunc vel lorem. Proin in justo turpis. Integer dapibus nulla vel orci dictum, quis porta nulla feugiat. Praesent vehicula arcu vel vehicula consequat. Quisque tincidunt lacinia purus, sit amet fringilla ex vehicula sed. Morbi ut purus sapien. Curabitur sit amet semper libero, et feugiat purus.",
        replies: [
          {
            name: "Charlie",
            text: "Proin vulputate lectus eget varius facilisis. Fusce quis turpis ut magna lobortis pharetra id et nisi. Aliquam vel odio nulla. Etiam suscipit, velit ac tincidunt pharetra, mauris augue dignissim elit, sit amet consequat libero lectus ut justo. Nam fermentum dui id nunc interdum, a vehicula risus vulputate. Sed non consectetur magna, id cursus lorem. Nulla facilisi. Nunc egestas nisi non tortor luctus viverra. Etiam vitae dapibus dolor. Nam eget congue magna, nec mollis est.",
            replies: [
              {
                name: "David",
                text: "Suspendisse et purus quis velit lobortis tempus. Vestibulum rhoncus est et nibh varius, ac elementum mauris luctus. Duis ut neque viverra, fermentum sem vitae, fringilla nunc. Curabitur id tincidunt velit. Nulla non augue erat. In hendrerit velit in nisl sollicitudin, in mollis tortor ultricies. In vehicula quam libero, quis vehicula ante pharetra nec. Aenean sit amet metus felis. Integer sagittis purus et erat vulputate fermentum.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Eve",
    text: "Nam ac felis lectus. Aenean dapibus ligula id velit vestibulum, in fringilla felis faucibus. Donec euismod sapien id nunc viverra vestibulum. Proin fermentum ligula at lectus gravida, quis laoreet velit facilisis. Quisque nec nisl id ligula fringilla dignissim. Nulla facilisi. Praesent elementum facilisis dui, vel tempor mauris fermentum ac. Morbi commodo tortor nec nunc faucibus, ac congue orci fringilla.",
    replies: [
      {
        name: "Frank",
        text: "Duis placerat augue vel efficitur volutpat. Suspendisse venenatis lacus ac magna vulputate, a iaculis ipsum feugiat. Aenean in purus a quam pellentesque congue. In non sapien nec felis vehicula blandit. Aliquam erat volutpat. Proin nec egestas justo. Donec consectetur sit amet magna in varius. Sed facilisis risus ut sapien lacinia, non egestas est elementum. Fusce sed arcu varius, viverra magna eget, facilisis lorem.",
        replies: [
          {
            name: "Grace",
            text: "Aliquam vel odio nulla. Fusce a justo sed justo efficitur pretium. Cras accumsan id quam vel bibendum. Aliquam erat volutpat. Vestibulum quis nisi quis erat luctus scelerisque non id tortor. Aenean cursus magna nec orci tempus, vitae fringilla lectus suscipit. Proin vestibulum accumsan velit, ut posuere augue cursus id.",
            replies: [
              {
                name: "Hank",
                text: "Pellentesque suscipit, eros et porttitor viverra, velit nisl varius ligula, vel dictum sem augue sed nunc. Maecenas aliquet eros sed libero commodo congue. Donec bibendum libero quis magna lobortis, non vehicula nulla auctor. Nulla facilisi. Curabitur malesuada velit sed libero auctor, sed ullamcorper ex tincidunt.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ivan",
    text: "Etiam ut mauris ac lectus finibus sodales. Cras malesuada felis ligula, ut ultrices elit vehicula at. Aliquam varius turpis quam, sed viverra enim congue non. Vestibulum ac orci sit amet tortor tempus vestibulum nec et tortor. Duis consequat id arcu id consequat. Aenean consequat velit ut nulla elementum sollicitudin. Quisque tincidunt, magna at vestibulum ultricies, ex erat hendrerit lectus, et cursus eros nisl at est.",
    replies: [
      {
        name: "Judy",
        text: "Fusce et mi vitae dui consequat posuere. Sed euismod ligula eget dui feugiat viverra. Integer dapibus nulla vel orci dictum, quis porta nulla feugiat. Cras accumsan id quam vel bibendum. Suspendisse ullamcorper euismod arcu, et venenatis tortor condimentum non.",
        replies: [
          {
            name: "Karl",
            text: "Duis in urna nec enim venenatis pharetra. Vestibulum rhoncus libero vel nibh lacinia, ut fringilla lacus dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            replies: [
              {
                name: "Laura",
                text: "Vivamus ullamcorper leo sit amet nulla dapibus, a malesuada urna sodales. Maecenas euismod, augue vel vehicula hendrerit, dui risus convallis mi, ut fermentum purus nunc vel lorem.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
