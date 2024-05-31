import { userCookieName, userCookieTime } from "@/global";

export const getUserCookieName = (name?: string) => name || userCookieName;

export const getUserCookie = (name?: string) => {
  const userCookieName = getUserCookieName(name);

  return getCookie(userCookieName);
};

export const setUserCookie = (value: string, name?: string) => {
  const userCookieName = getUserCookieName(name);

  setCookie(userCookieName, value, userCookieTime);
};

export const setCookie = (name: string, value: string, seconds: number) => {
  const date = new Date();
  const sec = seconds * 1000;
  date.setTime(date.getTime() + sec);
  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${name}=${value}; ${expires}; path=/; Secure; SameSite=Strict;`;
};

export const getCookie = (name: string) => {
  const cookie = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i += 1) {
    let char = ca[i];

    if (char) {
      while (char.charAt(0) === " ") {
        char = char.substring(1);
      }

      if (char.indexOf(cookie) === 0) {
        return char.substring(name.length, char.length);
      }
    }
  }
  return "";
};

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
