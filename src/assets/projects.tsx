type ProjectsType = Array<{
  title: string;
  embedId: string;
  text: string;
  tools: string;
  github: string;
}>;

const projects: ProjectsType = [
  {
    title: "Diary Next App",
    embedId: "REFvRv_vOHw",
    text: `Aplikacja zbudowana dla mobile i desktop. Next.js, Typescript, React,
    tailwind, mongoose.`,
    tools: ``,
    github: `https://github.com/PatrykTalaga/diary-next-app`,
  },
  {
    title: "My Library",
    embedId: "oFxaYJ7HW40",
    text: `Wirtualna biblioteka. Przechowuje okładki książek na serverze oraz dane w lokalnej bazie danych mongoDB.
    Autoryzacja użytkownika za pomocą next-auth z uprawnieniami zależnimi od roli:
    Guest - wyświetlanie książkek, komentarzy i listy książek do przeczytania;
    User - dodawanie komentarzy i edytować swoich komentarzy; Admin - dodawanie i edycja książek,
    wszystkich komentarzy oraz listy książek do przeczytania`,
    tools: `Next.Js 14, Typescript, React, Tailwind, mongoose, next-auth`,
    github: `https://github.com/PatrykTalaga/my-library/`,
  },
  {
    title: "Placeholder",
    embedId: "oFxaYJ7HW40",
    text: `Placeholder `,
    tools: `Next.Js 14, Typescript, React, Tailwind, mongoose, next-auth`,
    github: `https://github.com/PatrykTalaga/my-library/`,
  },
  {
    title: "Placeholder 2",
    embedId: "oFxaYJ7HW40",
    text: `Placeholder 2`,
    tools: `Next.Js 14, Typescript, React, Tailwind, mongoose, next-auth`,
    github: `https://github.com/PatrykTalaga/my-library/`,
  },
  {
    title: "Placeholder 3",
    embedId: "oFxaYJ7HW40",
    text: `Placeholder 3`,
    tools: `Next.Js 14, Typescript, React, Tailwind, mongoose, next-auth`,
    github: `https://github.com/PatrykTalaga/my-library/`,
  },
  {
    title: "Placeholder 4",
    embedId: "oFxaYJ7HW40",
    text: `Placeholder 4`,
    tools: `Next.Js 14, Typescript, React, Tailwind, mongoose, next-auth`,
    github: `https://github.com/PatrykTalaga/my-library/`,
  },
];

export default projects;
