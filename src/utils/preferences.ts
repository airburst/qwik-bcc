import { DEFAULT_PREFERENCES } from "../../src/constants";
import type { Preferences, User } from "../../src/types";

export const getPreferences = (user: User): Preferences => {
  const preferences = user.preferences as Preferences;

  return {
    ...DEFAULT_PREFERENCES,
    ...preferences,
  };
};
