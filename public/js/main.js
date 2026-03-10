import onReady from "./modules/onReady.js";
import showStarterPacks from "./modules/showStarterPacks.js";
import switchLanguage from "./modules/language-switcher.js";
import initThemeSwitcher from "./modules/theme-switcher.js";

onReady(async () => {
  switchLanguage();
  showStarterPacks();
  initThemeSwitcher();
});
