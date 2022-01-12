import imgMainOradea from "../assets/oradea/oristoric1.jpg";
import imgSecondOradea from "../assets/oradea/oristoric2.jpg";

import imgMainSibiu from "../assets/sibiu/sbistoric1.jpg";
import imgSecondSibiu from "../assets/sibiu/sbistoric2.jpg";

import imgMainClujNapoca from "../assets/cluj/cjistoric1.jpg";
import imgSecondClujNapoca from "../assets/cluj/cjistoric2.jpg";

import imgMainBrasov from "../assets/brasov/bvistoric1.jpg";
import imgSecondBrasov from "../assets/brasov/bvistoric2.jpg";

import imgOr1 from "../assets/oradea/impero.jpg";
import imgOr2 from "../assets/oradea/double.jpg";
import imgOr3 from "../assets/oradea/stoker.jpg";

import imgBv1 from "../assets/brasov/safrano.jpg";
import imgBv2 from "../assets/brasov/kolping.jpg";
import imgBv3 from "../assets/brasov/belfort.jpg";

import imgCj1 from "../assets/cluj/norm.jpg";
import imgCj2 from "../assets/cluj/confort.jpg";
import imgCj3 from "../assets/cluj/opera.jpg";

import imgSb1 from "../assets/sibiu/art.jpg";
import imgSb2 from "../assets/sibiu/cont.jpg";
import imgSb3 from "../assets/sibiu/heltau.jpg";
import {
  ATRACTII_TURISTICE_BRASOV,
  ATRACTII_TURISTICE_CLUJ,
  ATRACTII_TURISTICE_ORADEA,
  ATRACTII_TURISTICE_SIBIU,
} from "./atractii";

export const ORASE = ["Oradea", "Brasov", "Cluj Napoca", "Sibiu"];

export const DETALII_ORASE = {
  oradea: {
    despre: {
      textMain: `Oradea, mai demult Oradea Mare este municipiul de reședință al județului Bihor, Crișana, România. Se află în vestul României, pe râul Crișul Repede, în imediata apropiere a frontierei cu Ungaria.Totodată,Oradea este și cel mai important oraș din regiunea istorică Crișana. La recensământul din 2002 municipiul avea 206.614 de locuitori.`,
      textSecond: `Zona metropolitană,care include și 11 comune învecinate,avea,în anul 2002,o populație de 249.746 locuitori,dintre care 68,2% români,28,7% maghiari In perioada interbelică,20,6% din populația orașului era alcătuită din evrei,fiind consemnate,de asemenea,comunități de germani,slovaci,ucraineni.Stațiunile Băile Felix și Băile 1 mai se află la o distanță de 8 km, respectiv 4 km de oraș`,
      imgMain: imgMainOradea,
      imgSecond: imgSecondOradea,
    },
    atractii_turistice: ATRACTII_TURISTICE_ORADEA,
    cazare: [
      {
        img: imgOr1,
        titlu: "Hotel Impero",
        descriere:
          "  Beneficiind de o locație ușor accesibilă pe bulevardul Decebal din Oradea, Hotelul Impero oferă acces gratuit la centrul de fitness și camere spațioase cu WiFi gratuit și internet prin cablu.",
        href: "https://www.booking.com/hotel/ro/impero.ro.html?aid=318615;label=Romanian_Romania_RO_RO_28510506025-Q4Vn7R7PWngr7Ph4YuXvKQS217246155261%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi2643854846%3Atiaud-285284110766%3Adsa-322307133353%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270;dest_id=-1165711;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1577623015;srpvid=691058b3f5f10026;type=total;ucfs=1&#hotelTmpl",
      },
      {
        img: imgOr2,
        titlu: "Hotel Double Tree",
        descriere:
          " Double Tree by Hilton Oradea este situat pe malul Crişului Repede, la 5 minute de mers cu maşina de centru. Oferă acces la o sală de fitness şi la un centru spa şi de wellness contra cost.",
        href: "https://www.booking.com/hotel/ro/doubletree-by-hilton-oradea.ro.html",
      },
      {
        img: imgOr3,
        titlu: "Hotel Stoker",
        descriere:
          "Hotelul Stokker, situat lângă parcul Petőfi Sándor, are un restaurant à la carte cu vedere la grădină și o cramă. Centrul oraşului şi gara centrală se află la doar 600 de metri.",
        href: "https://www.booking.com/hotel/ro/stokker.ro.html",
      },
    ],
  },
  brasov: {
    despre: {
      textMain: `Brașov este municipiul de reședință al județului cu același nume, Transilvania, România, format din localitățile componente Brașov (reședința) și Poiana Brașov. Potrivit recensământului din 2011, are o populație de 253.200 locuitori,fiind unul dintre cele mai mari orașe din țară. Patron al orașului este considerată a fi Fecioara Maria.`,
      textSecond: `Stațiunea de iarnă Poiana Brașov se află la 12 km distanță de centrul municipiului, dispunând de o infrastructură dezvoltată pentru practicarea sporturilor de iarnă.Municipiul Brașov a reprezentat, de secole, unul dintre cele mai importante, puternice și înfloritoare orașe din zonă. Datorită poziției geografice privilegiate și a infrastructurii sale de astăzi, el permite dezvoltarea multor activități economice, culturale și sportive.`,
      imgMain: imgMainBrasov,
      imgSecond: imgSecondBrasov,
    },
    atractii_turistice: ATRACTII_TURISTICE_BRASOV,
    cazare: [
      {
        img: imgBv1,
        titlu: "Safrano Palace",
        descriere:
          "Safrano Palace se află în centrul orașului Brașov, lângă Piața Sfatului și oferă WiFi gratuit în întreaga proprietate.Fiecare cameră este dotată cu TV cu ecran plat și baie privată.",
        href: "https://www.booking.com/hotel/ro/safrano-bed-amp-breakfast.ro.html?aid=373426;label=brasov-vFlk8Zh%2A0q8Z8jj2mpZVqgS392238647500%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-59972399984%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270",
      },
      {
        img: imgBv2,
        titlu: "Hotel Kolping",
        descriere:
          "Hotelul Kolping este situat la poalele muntelui Tâmpa, în centrul istoric al oraşului Braşov, la 800 de metri de Biserica Neagră și la 300 de metri de Bastionul Ţesătorilor.",
        href: "https://www.booking.com/hotel/ro/kolping.ro.html?aid=373426;label=brasov-vFlk8Zh%2A0q8Z8jj2mpZVqgS392238647500%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-59972399984%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270",
      },
      {
        img: imgBv3,
        titlu: "Hotel Belfort",
        descriere:
          "Camerele moderne oferă vedere la pădure sau vedere panoramică la oraş. Dotările includ TV cu canale prin cablu, seif, cafea şi ceai, precum şi facilităţi de călcat.",
        href: "https://www.booking.com/hotel/ro/belfort-hotel.ro.html?aid=373426;label=brasov-vFlk8Zh%2A0q8Z8jj2mpZVqgS392238647500%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-59972399984%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270",
      },
    ],
  },
  cluj_napoca: {
    despre: {
      textMain: `Cluj-Napoca, Cluj până în 1974 și în limbajul cotidian este municipiul de reședință al județului Cluj, Transilvania, România. La recensământul din 2011 era al doilea oraș al României ca populație. Pe plan geografic, se află la distanțe aproximativ egale de București (458 kilometri), Budapesta (460 km) și Belgrad (464 km)`,
      textSecond: `Conform recensământului din 2011, 324,576 oameni locuiau în cadrul limitelor orașului, lucru care plasează orașul pe locul doi ca populație în România, fiind printre puținele orașe care au înregistrat o creștere de la cifra înregistrată la recensământul din 2002.Zona metropolitană Cluj-Napoca are o populație de 411,379 de oameni, pe când populația zonei periurbane depășește 420,000 de locuitori`,
      imgMain: imgMainClujNapoca,
      imgSecond: imgSecondClujNapoca,
    },
    atractii_turistice: ATRACTII_TURISTICE_CLUJ,
    cazare: [
      {
        img: imgCj1,
        titlu: "Norm Hill Hotel",
        descriere:
          "  Beneficiind de o locație ușor accesibilă pe bulevardul Decebal din Oradea, Hotelul Impero oferă acces gratuit la centrul de fitness și camere spațioase cu WiFi gratuit și internet prin cablu.",
        href: "https://www.booking.com/hotel/ro/impero.ro.html?aid=318615;label=Romanian_Romania_RO_RO_28510506025-Q4Vn7R7PWngr7Ph4YuXvKQS217246155261%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi2643854846%3Atiaud-285284110766%3Adsa-322307133353%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270;dest_id=-1165711;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1577623015;srpvid=691058b3f5f10026;type=total;ucfs=1&#hotelTmpl",
      },
      {
        img: imgCj2,
        titlu: "Hotel Confort",
        descriere:
          "Situat la doar 500 de metri de centrul orașului Cluj-Napoca, Hotelul Confort a fost renovat în 2013 și oferă WiFi gratuit.Principalele atracţii turistice sunt la câteva minute de mers pe jos.",
        href: "https://www.booking.com/hotel/ro/confort.ro.html?aid=373426;label=cluj-napoca-U_unD8I3jvlqq6OV43b3vgS139852881771%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-12243691857%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270",
      },
      {
        img: imgCj3,
        titlu: "Hotel Opera Plaza",
        descriere:
          " Hotelul Opera Plaza se află în centrul istoric al orașului Cluj-Napoca, la numai 200 m de Opera Română și la 900 m de Piața Unirii. Oferă WiFi gratuit și 2 restaurante.",
        href: "https://www.booking.com/hotel/ro/confort.ro.html?aid=373426;label=cluj-napoca-U_unD8I3jvlqq6OV43b3vgS139852881771%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-12243691857%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270",
      },
    ],
  },
  sibiu: {
    despre: {
      textMain: `Sibiu este municipiul de reședință al județului cu același nume, Transilvania, România, format din localitățile componente Păltiniș și Sibiu (reședința). Sibiul este un important centru cultural și economic din sudul Transilvaniei, cu o populație de 147.245 locuitori conform recensământului din 2011.`,
      textSecond: `Municipiul Sibiu a reprezentat și reprezintă unul dintre cele mai importante și înfloritoare orașe din Transilvania, fiind unul dintre principalele centre ale coloniștilor sași stabiliți în zonă. Orașul a fost capitală a Transilvaniei între anii 1692-1791 și 1849-1865.Sibiul este în prezent unul dintre orașele cu cel mai mare nivel de investiții străine din România.`,
      imgMain: imgMainSibiu,
      imgSecond: imgSecondSibiu,
    },
    atractii_turistice: ATRACTII_TURISTICE_SIBIU,
    cazare: [
      {
        img: imgSb1,
        titlu: "Hotel ART",
        descriere:
          "Hotelul ART oferă terasă și se află în Sibiu, la mai puțin de 450 de metri de Turnul Sfatului din Sibiu și la 250 de metri de piața Albert Huet. Pune la dispoziție WiFi gratuit.",
        href: "https://www.booking.com/hotel/ro/art-sibiu.ro.html?aid=373426;label=sibiu-nyJu2REN_eN39eNLJRwN6gS392388479903%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-4412996702%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270",
      },
      {
        img: imgSb2,
        titlu: "Hotel Continental",
        descriere:
          "Situat într-o clădire istorică din centrul oraşului Sibiu, hotelul de 4 stele Continental Forum oferă camere elegante cu acces gratuit la internet WiFi si un restaurant cu preparate internationale",
        href: "https://www.booking.com/hotel/ro/continental-forum.ro.html?aid=373426;label=sibiu-nyJu2REN_eN39eNLJRwN6gS392388479903%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-4412996702%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270;dest_id=2979;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=24;hpos=24;nflt=sth%3D8;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1577967941;srpvid=a3bf576274b80017;type=total;ucfs=1&#hotelTmpl",
      },
      {
        img: imgSb3,
        titlu: "Heltau Apartments",
        descriere:
          "Unităţile au podea cu parchet, o bucătărie utilată complet, cu un frigider, o zonă de luat masa, un TV cu ecran plat cu canale prin satelit şi o baie privată cu duş şi uscător de păr.",
        href: "https://www.booking.com/hotel/ro/cindrelului-nr-11.ro.html?aid=373426;label=sibiu-nyJu2REN_eN39eNLJRwN6gS392388479903%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284111006%3Akwd-4412996702%3Alp1011798%3Ali%3Adec%3Adm;sid=2327df1b2139ac9e8191d89258cf9270;dest_id=2979;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=14;hpos=14;nflt=sth%3D8;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1577967941;srpvid=a3bf576274b80017;type=total;ucfs=1&#hotelTmpl",
      },
    ],
  },
};
