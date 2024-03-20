import localFont from "next/font/local";
const CausticsDemo = localFont({
  src: [
    {
      path: "../assets/fonts/Caustics-Demo.otf",
    },
  ],
  variable: "--caustics-demo",
});

export { CausticsDemo };
