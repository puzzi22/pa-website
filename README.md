# UOC Boilerplate

UOC Boilerplate is a starter template for the HTML and CSS Tools courses from the [Master's Program in Multimedia Applications](https://estudis.uoc.edu/ca/masters-universitaris/aplicacions-multimedia/presentacio) and the [Master's Program in Web App and Website Development](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) at the [Universitat Oberta de Catalunya](https://www.uoc.edu). It aims to provide a basic, modern frontend web development starter pack based on Parcel and including a Sass compiler, an ES6 transpiler, minifiers, an image transformer, and development tools.

This is the 3.x version of UOC Boilerplate, available since the UOC 2020-2 semester.

## Requirements

[Node.js](http://nodejs.org/) >= 14.15.x

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

## Features

- Uses [Parcel v2](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- Minification and optimization of CSS files on production builds with [`cssnano`](https://github.com/cssnano/cssnano) (`@parcel/optimizer-cssnano`).
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).

### HTML

- Minification and optimization of CSS files on production builds [`htmlnano`](https://github.com/posthtml/htmlnano) (`@parcel/optimizer-htmlnano`).
- [PostHTML](https://github.com/posthtml/posthtml) features:
  - Include partial HTML files with [`posthtml-include`](https://github.com/posthtml/posthtml-include).

### Scripts

- Allow for modern JavaScript (ES201x/ES8/ES7/ES6…) which is automatically transpiled to ES5 and minifed in production builds, with [Babel](https://babeljs.io/).

### Images

- Image transformation with [`@parcel/transformer-image`](https://parceljs.org/recipes/image/) (based on [`sharp`](https://sharp.pixelplumbing.com/)).

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this boilerplate

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                                                                                                                     |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders.                                                                                                                                                                                                                                                                                                               |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                                                                                                                    |

## Need help? / Want to help out?

Feel free to create a [new issue](https://github.com/uoc-advanced-html-css/uoc-boilerplate/issues/new/) or drop me a line at jorditarrida@uoc.edu.

Are you using this Boilerplate for your projects or for educational purposes? I would love to hear about it!

```
pa-website
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ d859f46d310da4cc6345aa80396294b8dfe569
│  │  ├─ 01
│  │  │  └─ 75c04b4b4042d7ea0ebcc3f196393b37586e65
│  │  ├─ 03
│  │  │  └─ 0a912db44f97957d1707d3e50bcfe01237d173
│  │  ├─ 06
│  │  │  ├─ 3ce31ea9a03c70b1e7a779ad21ac5917d2d198
│  │  │  └─ c5fc0d06c032f7210193bffb1b64cd4fb5e341
│  │  ├─ 07
│  │  │  └─ 403d863bfeca92a331d76b3d1aa20fcd3755a8
│  │  ├─ 08
│  │  │  └─ 0623294539206d34c17fba13894ef2fb47c5f2
│  │  ├─ 09
│  │  │  └─ d5caf604f5872ed64d9515da1177f08e1962d8
│  │  ├─ 0d
│  │  │  └─ 52293a8ee9e6161ef18e49dc713e61a83ee270
│  │  ├─ 14
│  │  │  └─ 82281e5c55acabe09d01b6ee7b66256576f00a
│  │  ├─ 15
│  │  │  └─ 7a14e78b6ae5938985f737a830e462b10c19b8
│  │  ├─ 16
│  │  │  └─ 054a71ea8a4fcbfec01cb7de816f1fbc8659c5
│  │  ├─ 19
│  │  │  └─ 98b2d920df8f3e27a3f67d56893d808bac79fb
│  │  ├─ 1a
│  │  │  └─ fcca6b733a6060404e2bc6c2194397c8a28284
│  │  ├─ 1d
│  │  │  └─ 8c78da41b2f2c297d6497f315abc97146918b6
│  │  ├─ 20
│  │  │  └─ 2ab36f74917616a0b2c86fb8121c83ffbd65d6
│  │  ├─ 25
│  │  │  ├─ 0a771b9d8bb07de839da935515e15d96041728
│  │  │  └─ bca015617e4939456cf39981c5d313e428c1f4
│  │  ├─ 26
│  │  │  └─ 3aa346ba6fd72cba439c3773cba7404339324e
│  │  ├─ 27
│  │  │  └─ 3c8acd2ac865fd6eec680c3880e6be4c2575fa
│  │  ├─ 28
│  │  │  ├─ c5ebf1625a05b35b9f18e4bc82fde92f1e96a2
│  │  │  └─ db8272aaee19ace6e391d84a009581c3ad6cd5
│  │  ├─ 33
│  │  │  └─ e004cf416c099e29568eccf368dee54925c6a4
│  │  ├─ 34
│  │  │  └─ d3517c6249e651bf44fcd60a94a7901a10641b
│  │  ├─ 35
│  │  │  └─ c98f98279905f5bacbc0aadb0b8fbb5a4506ba
│  │  ├─ 3a
│  │  │  └─ 0d20f2ed54e4c56b143fb56cc4fbc48597ca3a
│  │  ├─ 3b
│  │  │  ├─ a05184d61fb6fadd655e3d0a84ef821897f560
│  │  │  ├─ b4cf27d1057d6bae0b788d75268ad3794a7e93
│  │  │  └─ e76d187f349e56ab0ae59015954e05fb781975
│  │  ├─ 3d
│  │  │  └─ 61753cfa6b9c42d05c79b84371f2142a7b19d9
│  │  ├─ 40
│  │  │  └─ a822536aabf61bdae4496d721aba6fc7f32657
│  │  ├─ 43
│  │  │  └─ d860d4c1473e9190068910d42107fd904f8551
│  │  ├─ 45
│  │  │  └─ 6e6dfa50aa89184d8873fbc456c478f05e267a
│  │  ├─ 47
│  │  │  ├─ 3cb79f9f93d9e53eb0a6df2e996fbf2be7dda7
│  │  │  └─ d06336206bc28d8a820c70091c603f16f1b0a5
│  │  ├─ 4b
│  │  │  └─ c444be24a03093a753894f3d8156efff606efb
│  │  ├─ 4e
│  │  │  └─ 223e17ba98de9bba1b305dad83dc3b2bcf28d7
│  │  ├─ 55
│  │  │  └─ c9cbf17b86f3996e9f8ee9f0b108951521237d
│  │  ├─ 5a
│  │  │  ├─ 33569e66de254bcf05bcfeedddb09b7b22fc5f
│  │  │  └─ 50667e22ec72b04a3b3405cad1035f8f650ed3
│  │  ├─ 5b
│  │  │  └─ 47ba33c6333680a43fe105add2eedebe0af9c5
│  │  ├─ 5c
│  │  │  ├─ 0652e6d9510514dac306ff34e0064d5cb6cfbe
│  │  │  └─ b41f881b6f70bc4793011c935c88031ebcf843
│  │  ├─ 5d
│  │  │  └─ e7b8ccc10ac70317461173b5a41cb92d74cc76
│  │  ├─ 5f
│  │  │  └─ 06a6dd645d86db80fed6aeca697b0c378a56e3
│  │  ├─ 66
│  │  │  └─ 4541bb2cae0534f8f6e88d7794d19813a5082b
│  │  ├─ 6a
│  │  │  └─ 64c1e23f444700be8f9410a8def26029a84e26
│  │  ├─ 6e
│  │  │  ├─ 5c13f3f6adee22f6a281ffae019f87ec6d775a
│  │  │  └─ b256324068afd0491d7ff4dfabba4687e82860
│  │  ├─ 73
│  │  │  └─ 05b0389aafb970c7590f8f4c80f7093363394d
│  │  ├─ 74
│  │  │  └─ 911969fbe4b47110d35a1e5c770f6ce1392033
│  │  ├─ 76
│  │  │  └─ 5d25b31c82d2e89bb486dee43a2e425596ed23
│  │  ├─ 7b
│  │  │  └─ fd0cc237cae3babdf733dda759f63c745acd95
│  │  ├─ 7d
│  │  │  └─ 3e625cdf931b64adae06487cd059f2a2fbdf6d
│  │  ├─ 84
│  │  │  └─ 5a9271a13707a6848ae840c4d19d01f1b30ed2
│  │  ├─ 87
│  │  │  ├─ 47f2f42de19336e87a3173eb49f4d68a81882a
│  │  │  └─ 4a4973bdabaab81673f81ba9d057fb3e9ac5a9
│  │  ├─ 8a
│  │  │  └─ 4d428e8821bf068f6650e626901418038aa46e
│  │  ├─ 8d
│  │  │  ├─ 53bb36f41932a69bc22cb95506b069799d47e2
│  │  │  └─ dceb35429d602a4e3fea4f82abe4cbd75f5965
│  │  ├─ 90
│  │  │  └─ 30664f3b1fd1c1aac446fa6257762b8f63c436
│  │  ├─ 91
│  │  │  └─ 51a77aec4b3b466ec668c78324c7a5332dd216
│  │  ├─ 92
│  │  │  └─ 4f7f203b5f9ed1e043b8c0c62570f9f81b3c28
│  │  ├─ 9c
│  │  │  └─ e9f4896ce3873d04dbc6a44dcbf0442930b29a
│  │  ├─ a1
│  │  │  └─ 94dec1401b6602d0d205536c7f260b2c6c6ffc
│  │  ├─ a2
│  │  │  └─ b9324e98b91da24f2477aa0d4eb856ac71f854
│  │  ├─ a7
│  │  │  └─ 0c6e9ecc7ac1a8f6b7e21fd668d32d5fa12588
│  │  ├─ a9
│  │  │  └─ dbcc364f19353cf9b70569b7f3cb117f91d181
│  │  ├─ aa
│  │  │  └─ 2f03ef8b2105a3aeb17e3ad4596e166b2f041c
│  │  ├─ ab
│  │  │  └─ 155ce138b843fb47d5ee901a7364f36de20646
│  │  ├─ ac
│  │  │  └─ 3b45741ebfbaa32e8d4df8981859fe400db5a6
│  │  ├─ ad
│  │  │  └─ 7564b8c116114a2d0bd139c52794d59a9bb990
│  │  ├─ af
│  │  │  ├─ 1b5ded8df81990de56392bce065abf1ae8c141
│  │  │  └─ d427af2a80816444bebb62ac5dc085642fe7d3
│  │  ├─ b0
│  │  │  └─ aeafbd8db81b03e9be783413fded69f57718c7
│  │  ├─ b2
│  │  │  └─ 0532cf90b6aa6941afa972b054b68cd37c664a
│  │  ├─ b3
│  │  │  └─ e37e8c6c69a87f31c60893c6493b7e2cc22396
│  │  ├─ ba
│  │  │  └─ 0e8785f1c4b2ccf43c8470e38fc21c182d26eb
│  │  ├─ bf
│  │  │  └─ 7362db429333c991330368490cd49531257f31
│  │  ├─ c5
│  │  │  └─ 767cb78df6460c344e2c324dc95ea5b7499c6f
│  │  ├─ c9
│  │  │  └─ bdfcf01b5c56e378345666c89fa49d653ab59d
│  │  ├─ ca
│  │  │  └─ fb72d8ebe2571e4eb50193432da590a9d4f747
│  │  ├─ cd
│  │  │  └─ f13f9a50b86774d3ddf4db9670d9df101976e2
│  │  ├─ d0
│  │  │  └─ dfc2fa6414895df3f163b0e3b22ce52e5c72cb
│  │  ├─ d2
│  │  │  └─ 736a2bcf5232fe63c5f9de54fb1aa954400fde
│  │  ├─ d3
│  │  │  └─ c1ce14ce776374443c05563f646e05eaecd9e9
│  │  ├─ d4
│  │  │  └─ 8d0b29679a0634d4136f4be31e397ef35b0940
│  │  ├─ d5
│  │  │  └─ 64d0bc3dd917926892c55e3706cc116d5b165e
│  │  ├─ d6
│  │  │  └─ 5e8ce729389551b3d39fee19e554de11397235
│  │  ├─ d7
│  │  │  └─ 6b62235b43d8d7ac1d86ec7acdd697edcf022a
│  │  ├─ db
│  │  │  └─ 63f6fcb1bb2aa09aa41281ef59d0d6b0671eb7
│  │  ├─ e0
│  │  │  └─ 9d7308b3b44518e51cb48303d780fe6b74da2c
│  │  ├─ e2
│  │  │  └─ 4e2de1e6d704c9f3ef029f4db8029c18a11b54
│  │  ├─ e5
│  │  │  └─ 8859a8b08d48e33adde304139205e1086fa2e5
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ 72c718abd7ef6430080e3ef686c7f124ce63a1
│  │  ├─ e9
│  │  │  └─ 9aae2bf00627eeb9390c9bf09a959fd8782559
│  │  ├─ ec
│  │  │  └─ abc248a73b19035cf58bda8dcc899ba558ad1d
│  │  ├─ ed
│  │  │  └─ 5f8daa0eadc2b881eeebd63cd2202fd2f3fa66
│  │  ├─ ee
│  │  │  └─ 04ae887b0c4265787a1abbc4259dac58448fef
│  │  ├─ ef
│  │  │  └─ 3ac1e42a46feec9a8b943a58f781603b96f248
│  │  ├─ f1
│  │  │  └─ 16e0e172fa289ae81305cadcedd138afd16628
│  │  ├─ f4
│  │  │  └─ 0512b63be01f428e026e557d787b74ac135479
│  │  ├─ f5
│  │  │  └─ 87922b5ab3d96ef49717c6528a020a8883ea81
│  │  ├─ fd
│  │  │  └─ 40b393b685bc2006ac24cf2f0b92437dd969bc
│  │  ├─ ff
│  │  │  └─ a0633de02a103d65e6ab275b64282b875f38c2
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .nvmrc
├─ .posthtmlrc
├─ .prettierrc
├─ .stylelintrc
├─ README.md
├─ package-lock.json
├─ package.json
└─ src
   ├─ assets
   │  ├─ fonts
   │  │  └─ .gitkeep
   │  ├─ images
   │  │  ├─ agenda-hero.jpg
   │  │  ├─ bg-hero.jpg
   │  │  ├─ contact-hero.jpg
   │  │  ├─ img-hor-1.jpg
   │  │  ├─ img-hor-2.jpg
   │  │  ├─ img-vert-1.jpg
   │  │  ├─ img-vert-2.jpg
   │  │  ├─ img-vert-3.jpg
   │  │  ├─ img-vert-4.jpg
   │  │  ├─ recordings
   │  │  │  ├─ 1.png
   │  │  │  ├─ 10.jpg
   │  │  │  ├─ 11.jpg
   │  │  │  ├─ 12.jpg
   │  │  │  ├─ 13.jpg
   │  │  │  ├─ 14.jpg
   │  │  │  ├─ 15.jpg
   │  │  │  ├─ 16.jpg
   │  │  │  ├─ 17.jpg
   │  │  │  ├─ 18.jpg
   │  │  │  ├─ 19.jpg
   │  │  │  ├─ 2.png
   │  │  │  ├─ 20.jpg
   │  │  │  ├─ 21.png
   │  │  │  ├─ 22.jpg
   │  │  │  ├─ 23.jpg
   │  │  │  ├─ 24.jpg
   │  │  │  ├─ 25.jpg
   │  │  │  ├─ 26.jpeg
   │  │  │  ├─ 27.jpeg
   │  │  │  ├─ 28.png
   │  │  │  ├─ 29.jpg
   │  │  │  ├─ 3.png
   │  │  │  ├─ 30.jpg
   │  │  │  ├─ 31.jpg
   │  │  │  ├─ 32.jpg
   │  │  │  ├─ 33.jpg
   │  │  │  ├─ 34.jpg
   │  │  │  ├─ 35.jpg
   │  │  │  ├─ 36.jpeg
   │  │  │  ├─ 37.jpg
   │  │  │  ├─ 38.png
   │  │  │  ├─ 39.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 40.jpg
   │  │  │  ├─ 41.jpeg
   │  │  │  ├─ 42.jpg
   │  │  │  ├─ 43.jpg
   │  │  │  ├─ 44.jpg
   │  │  │  ├─ 45.png
   │  │  │  ├─ 5.jpg
   │  │  │  ├─ 6.jpg
   │  │  │  ├─ 7.jpg
   │  │  │  ├─ 8.jpg
   │  │  │  ├─ 9.jpg
   │  │  │  ├─ dialoghi-heads.gif
   │  │  │  └─ dialoghi.jpg
   │  │  └─ recordings-hero.jpg
   │  ├─ scripts
   │  │  └─ main.js
   │  └─ styles
   │     ├─ _base.scss
   │     ├─ _components.scss
   │     ├─ _layouts.scss
   │     ├─ _variables.scss
   │     └─ main.scss
   ├─ contact.html
   ├─ index.html
   ├─ recordings.html
   └─ views
      ├─ agenda
      │  └─ agenda2023.html
      ├─ footer.html
      └─ main-nav.html

```