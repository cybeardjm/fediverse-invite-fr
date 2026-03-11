import { getUrlParam } from "./urlParams.js";

export default () => {
  const langParam = getUrlParam("lang");
  const hrefs = ["/about"];

  hrefs.forEach((href) => {
    const link = document.querySelector(`a[href^="${href}"]`);
    if (link && langParam) {
      const url = new URL(link.href);
      url.searchParams.set("lang", langParam);
      link.href = url.toString();
    }
  });
};
