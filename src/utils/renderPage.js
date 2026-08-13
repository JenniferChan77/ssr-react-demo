export default function renderPage(appHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>SSR Demo</title>
</head>
<body>
  <div id="root">${appHtml}</div>
  <script type="module" src="/src/entry-client.jsx"></script>
</body>
</html>`;
}