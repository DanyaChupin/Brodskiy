const TG = process.env.NEXT_PUBLIC_TG;
const WA = process.env.NEXT_PUBLIC_WA;

export const TG_LINK = `tg://resolve?domain=${TG}`;
export const WA_LINK = `https://api.whatsapp.com/send/?phone=${WA}&text&type=phone_number&app_absent=0`;
