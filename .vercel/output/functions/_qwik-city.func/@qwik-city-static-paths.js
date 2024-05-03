const staticPaths = new Set(["/favicon.svg","/images/bath-cc-logo.svg","/images/biking-48.png","/images/biking-neutral-500-64.png","/images/biking-neutral-700-64.png","/images/hamburger-50.png","/images/no-connection.svg","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };