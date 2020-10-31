import changCase from "./changeCase";
import { double, power, half } from "generative-algos";

const int = (targ: string): void => {
  document.addEventListener("DOMContentLoaded", (e) => {
    const caps = changCase("hello");
    console.log(caps);
    console.log(power(6, 2));
    console.log(`Half : ${half(60)}`);

    const target = document.querySelector("#targ");
    console.log(target);
  });
};

const app = ((target = "target") => {
  return int(target);
})();

export default app;
