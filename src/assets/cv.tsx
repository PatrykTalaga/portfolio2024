type CVType = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  eMail: string;
  telRegionalString: string;
  telNum: number;
  telString: string;
  education: [
    {
      startDate: string;
      endDate: string;
      school: string;
      title: string;
      description: string;
    }
  ];
  employmentHistory: Array<{
    startDate: string;
    endDate: string;
    companyName: string;
    description: string;
  }>;
  skills: Array<string>;
  languages: Array<string>;
  certificates: Array<string>;
  hobbies: Array<string>;
};

type contactType = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  eMail: string;
  telRegionalString: string;
  telNum: number;
  telString: string;
};

const cvData: CVType = {
  name: "Patryk Jan Talaga",
  addressLine1: `***********`,
  addressLine2: `***********`,
  eMail: `patryk.j.talaga@gmail.com`,
  telRegionalString: "+48",
  telNum: 730342137,
  telString: `730 342 137`,
  education: [
    {
      startDate: `09/2014`,
      endDate: `05/2019`,
      school: `Wojskowa Akademia Techniczna, Warszawie`,
      title: `Inżynier`,
      description: `Inżynier, Wojskowa Akademia Techniczna im Jarosława Dąbrowskiego w Warszawie,
      Lotnictwo i Kosmonautyka, Specjalność: Awionika, temat pracy dyplomowej:
      „Miniaturowy rejestrator parametrów lotu dla bezzałogowego statku powietrznego”.
      `,
    },
  ],
  employmentHistory: [
    {
      startDate: `07/2018`,
      endDate: `08/2018`,
      companyName: `IBEX-UL Sp. z o.o., Warszawa`,
      description: `IBEX-UL Sp. z o.o., praktyki zawodowe, asystent mechanika,
      przygotowanie samolotów do lotu, wykonywanie obsług okresowych.”.
      `,
    },
  ],
  skills: [
    `Znajomość programowania w języku JavaScript i Typescript`,
    `Znajomość framework NextJs, Vite oraz bibliotek React i Tailwind`,
    `Znajomość HTML i CSS`,
    `Umiejętność korzystania z narzędzia git i platformy github`,
    `Znajomość programowania w języku C`,
    `Dobra znajomość obsługi komputera i pakietu biurowego MS Office`,
    `Umiejętność pracy w zespole`,
    `Umiejętność  programowanie mikrokontrolerów`,
    `Umiejętność  czytania i sporządzania schematów elektrycznych oraz lutowania i kontroli płytek PCB`,
  ],
  languages: [`Język angielski - dobry / B2`],
  certificates: [`Prawo jazdy kategorii B`],
  hobbies: [`Fotografia`],
};

export const contactData: contactType = {
  name: "Patryk Jan Talaga",
  addressLine1: `***********`,
  addressLine2: `***********`,
  eMail: `patryk.j.talaga@gmail.com`,
  telRegionalString: "+48",
  telNum: 730342137,
  telString: `730 342 137`,
};
export default cvData;
