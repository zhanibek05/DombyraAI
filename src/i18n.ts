import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers'; // Import necessary function to read cookies

export default getRequestConfig(async () => {
  const localeCookie = cookies().get('locale'); // Read the locale from cookies
  const locale = localeCookie ? localeCookie.value : 'kk'; // Fallback to 'en' if no cookie is found

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
