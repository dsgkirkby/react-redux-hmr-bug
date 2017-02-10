export const TOGGLE_APP_DRAWER = 'TOGGLE_APP_DRAWER';
export const toggleAppDrawer = () => ({
  type: TOGGLE_APP_DRAWER
});

export const SWITCH_VIEW = 'SWITCH_VIEW';
export const switchView = (viewType, args) => {
  return {
    type: SWITCH_VIEW,
    view: viewType,
    args: args
  };
};
