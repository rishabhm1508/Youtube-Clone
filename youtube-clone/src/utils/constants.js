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

export const sidePanelIcons = [
  {
    name: "Home",
    url: homeIcon,
  },
  {
    name: "Shorts",
    url: ytShortsIcon,
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

const YT_API_KEY = "AIzaSyA7ruEghcDPLalmwth0wOKY8ZvkUbxp27s";

export const youtubeVideoAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  YT_API_KEY;

export const searchSuggestionsAPI = ` http://suggestqueries.google.com/complete/search?client=firefox&s=yt&key=${YT_API_KEY}`;
