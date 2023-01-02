import { Ubuntu, Be_Vietnam_Pro, Oswald, Bebas_Neue, Indie_Flower, Amatic_SC, Patrick_Hand, Caveat, Sacramento, Neucha } from '@next/font/google';

const be_vietnam_pro_Instance = Be_Vietnam_Pro({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})
const ubuntu_Instance = Ubuntu({
  weight: ['300','400','500','700'],
  subsets:['latin']
})
const oswald_Instance = Oswald({
  weight: ['200','300','400','500','600','700'],
  subsets: ['latin'],
})
const Bebas_Neue_Instance = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"]
})
const Indie_Flower_Instance = Indie_Flower({
  weight: ['400'],
  subsets: ['latin']
})
const East_Sea_Dokdo_Instance = Neucha({
  weight: ['400'],
  subsets: ['latin']
})

export const be_veitnam_pro = be_vietnam_pro_Instance.className
export const ubuntu = ubuntu_Instance.className
export const oswald = oswald_Instance.className
export const bebas_neue = Bebas_Neue_Instance.className
export const indie_flower = Indie_Flower_Instance.className
export const east_sea_dokdo = East_Sea_Dokdo_Instance.className