
export const getCookieFromReq = (req,cookiekey) => {
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookiekey}=`));
    if (!cookie) { return undefined };
    return cookie.split('=')[1];
}