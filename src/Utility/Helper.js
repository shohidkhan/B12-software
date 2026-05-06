export const getInstalledApps = () => {
  const appsId = localStorage.getItem("apps");
  if (appsId) {
    const appsParse = JSON.parse(appsId);
    return appsParse;
  }
  return [];
};

export const addApp = (id) => {
  const installedApps = getInstalledApps();

  //   return alert(installedApps);

  if (installedApps.includes(id)) {
    alert("already Installed this app");
  } else {
    installedApps.push(id);

    localStorage.setItem("apps", JSON.stringify(installedApps));
  }
  //   alert(id);
};

export const removeApp = (id) => {
  const getAllStoredBooks = getInstalledApps();
  const appFilter = getAllStoredBooks.filter((b) => b !== id);
  const restApps = JSON.stringify(appFilter);
  localStorage.setItem("apps", restApps);
};
