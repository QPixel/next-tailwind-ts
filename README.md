# Next.JS X TailwindCSS x TS template
This template gives you all the boilerplate code needed to bootstrap a project that uses next, tailwind, and typescript. It comes with the default eslint config from next and is preconfigured with a few *opinionated* features.

## Download/Setup
You can setup this example using ``create-next-app``

``yarn create next-app --example https://github.com/qpixel/next-tailwind-ts next-tailwind-ts-example``
<details>
<summary>Using NPM/PNPM</summary>

### NPM
``npx create-next-app --example https://github.com/qpixel/next-tailwind-ts next-tailwind-ts-example``
### PNPM
``pnpx create-next-app --example https://github.com/qpixel/next-tailwind-ts next-tailwind-ts-example``
</details>

If you want to get Tailwind intellisense with twin check this out: https://github.com/lightyen/vscode-tailwindcss-twin

## The stack
  - Next.JS
  - TailwindCSS
  - Typescript

Those are the core components. I am using twin.macro and emotion.js to handle the css-in-js component. It gives typings and ease of use functions to use @emotion/react or @emotion/css styled components.

## Credits
- [QPixel](https://github.com/qpixel)
- [Ben Rogerson/Twin.examples](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion)


## Contributing
Any contributions you make are greatly appreciated.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request