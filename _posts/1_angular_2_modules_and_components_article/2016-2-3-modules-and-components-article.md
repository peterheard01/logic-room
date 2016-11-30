---
layout: post
title: Angular 2 Modules And Components
author: Pete Heard
excerpt: Angular 2 Modules and Components are important building blocks trying to use the framework without having perfect knowledge on their purpose ...
thumbnail: 404.jpg
date:   2016-02-3 01:03:50 +0000
---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



> This article uses Angular 2.0.0 and Webstorm 2016.2.3

#### What We Will Cover :

- Pre-Bootstrapping & Javascript Dependencies : Preparing the Browser for Angular 2
- Initial Framework Architecture (Modules and Components) : Dependencies
- Exercise : Wiring up a ```child``` module & component
- Exercise : Wiring up a ```grand-child``` module & component
- Exercise : Wiring up a ```shared``` module & component

####  Pre-Bootstrapping & Javascript Dependencies : Preparing the Browser for Angular 2 #####

Angular 2 applications are built around the concept of node modules which live in a node_modules folder within a new project. Upon starting the application the browser will load up the default document (index.html). Before Angular 2 can get loaded this is responsible for a number of pre-bootstrapping steps, the ```index.html``` will use ```<script></script>``` tags to load scripts to do 4 things:

1.  ***Browser [Polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill) [line 8]*** - ensures the framework has everything it needs in place if older browsers are being used.
2. ***Zones [line 10]*** - these are involved with managing context in Angular 2 applications.
3. ***Reflect [line 11]*** - this adds some extra language constructs which help us define certain Angular 2/Typescript syntaxes like ```@NgInclude``` and ```@Component``` attributes.
4. ***Module Loader [line 12-17]*** - this will use [SystemJs](https://github.com/systemjs/systemjs) : a Javascript module loading libray which will be needed to load the rest of the Angular 2 application.

```html
<head>
  <title>Angular 2 QuickStart</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles.css">

  <!-- Polyfill(s) for older browsers -->
  <script src="node_modules/core-js/client/shim.min.js"></script>

  <script src="node_modules/zone.js/dist/zone.js"></script>
  <script src="node_modules/reflect-metadata/Reflect.js"></script>
  <script src="node_modules/systemjs/dist/system.src.js"></script>

  <script src="systemjs.config.js"></script>
  <script>
    System.import('app').catch(function(err){ console.error(err); });
  </script>
</head>
```
> modules-and-components/app/index.html


