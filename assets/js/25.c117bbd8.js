(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{278:function(t,e,a){"use strict";a.r(e);var s=a(38),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("Want to build a Flarum extension? You've come to the right place! This document will take you through some essential concepts, after which you'll build your first Flarum extension from scratch.")]),t._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),a("p",[t._v("In order to understand how to extend Flarum, first we need to understand a bit about how Flarum is built.")]),t._v(" "),a("p",[t._v("Be aware that Flarum uses some "),a("em",[t._v("modern")]),t._v(" languages and tools. If you've only ever built WordPress plugins before, you might feel a bit out of your depth! That's OK — this is a great time to learn cool new things and extend your skillset. However, we would advise that you become somewhat familiar with the technologies described below before proceeding.")]),t._v(" "),a("p",[t._v("Flarum is made up of three layers:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("First, there is the "),a("strong",[t._v("backend")]),t._v(". This is written in "),a("a",{attrs:{href:"https://laracasts.com/series/object-oriented-bootcamp-in-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("object-oriented PHP"),a("OutboundLink")],1),t._v(", and makes use of a wide array of "),a("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),a("OutboundLink")],1),t._v(" components and other packages via "),a("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Second, the backend exposes a "),a("strong",[t._v("public API")]),t._v(" which allows frontend clients to interface with your forum's data. This is built according to the "),a("a",{attrs:{href:"https://jsonapi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON:API specification"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Finally, there is the default web interface which we call the "),a("strong",[t._v("frontend")]),t._v(". This is a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Single-page_application",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-page application"),a("OutboundLink")],1),t._v(" which consumes the API. It's built with a simple React-like framework called "),a("a",{attrs:{href:"https://mithril.js.org/archive/v0.2.5/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mithril.js"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("p",[t._v("Extensions will often need to interact with all three of these layers to make things happen. For example, if you wanted to build an extension that adds custom fields to user profiles, you would need to add the appropriate database structures in the "),a("strong",[t._v("backend")]),t._v(", expose that data in the "),a("strong",[t._v("public API")]),t._v(", and then display it and allow users to edit it on the "),a("strong",[t._v("frontend")]),t._v(".")]),t._v(" "),a("p",[t._v("So... how do we extend these layers?")]),t._v(" "),a("h2",{attrs:{id:"extenders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extenders","aria-hidden":"true"}},[t._v("#")]),t._v(" Extenders")]),t._v(" "),a("p",[t._v("In order to extend Flarum, we will be using a concept called "),a("strong",[t._v("extenders")]),t._v(". Extenders are "),a("em",[t._v("declarative")]),t._v(" objects that describe in plain terms the goals you are trying to achieve (such as adding a new route to your forum, or executing some code when a new discussion was created).")]),t._v(" "),a("p",[t._v("Every extender is different. However, they will always look somewhat similar to this:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register a JavaScript and a CSS file to be delivered with the forum frontend")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Extend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'forum'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/forum-scripts.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("css")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/forum-styles.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You first create an instance of the extender, and then call methods on it for further configuration. All of these methods return the extender itself, so that you can achieve your entire configuration just by chaining method calls.")]),t._v(" "),a("p",[t._v("To keep things consistent, we use this concept of extenders in both the backend (in PHP land) and the frontend (in JavaScript land). "),a("em",[t._v("Everything")]),t._v(" you do in your extension should be done via extenders, because they are a "),a("strong",[t._v("guarantee")]),t._v(" we are giving to you that a future minor release of Flarum won't break your extension.")]),t._v(" "),a("p",[t._v("All of the extenders currently available to you from Flarum's core can be found in the "),a("a",{attrs:{href:"https://github.com/flarum/core/blob/master/src/Extend",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Extend")]),t._v(" namespace"),a("OutboundLink")],1),t._v(". Extensions may also offer their own extenders.")]),t._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),a("p",[t._v("Want to see an extender in action? The "),a("code",[t._v("extend.php")]),t._v(" file in the root of your Flarum installation is the easiest way to register extenders just for your site. It should return an array of extender objects. Pop it open and add the following:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Flarum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Flarum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Extend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'forum'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Document "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<script>alert(\"Hello, world!\")<\/script>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[t._v("Now pay your forum a visit for a pleasant (albeit extremely obtrusive) greeting. 👋")]),t._v(" "),a("p",[t._v("For simple site-specific customizations – like adding a bit of custom CSS/JavaScript, or integrating with your site's authentication system – the "),a("code",[t._v("extend.php")]),t._v(" file in your forum's root is great. But at some point, your customization might outgrow it. Or maybe you have wanted to build an extension to share with the community from the get-go. Time to build an extension!")]),t._v(" "),a("h2",{attrs:{id:"extension-packaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-packaging","aria-hidden":"true"}},[t._v("#")]),t._v(" Extension Packaging")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(" is a dependency manager for PHP. It allows applications to easily pull in external code libraries and makes it easy to keep them up-to-date so that security and bug fixes are propagated rapidly.")]),t._v(" "),a("p",[t._v('As it turns out, every Flarum extension is also a Composer package. That means someone\'s Flarum installation can "require" a certain extension and Composer will pull it in and keep it up-to-date. Nice!')]),t._v(" "),a("p",[t._v("During development, you can work on your extensions locally and set up a "),a("a",{attrs:{href:"https://getcomposer.org/doc/05-repositories.md#path",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer path repository"),a("OutboundLink")],1),t._v(" to install your local copy. Create a new "),a("code",[t._v("packages")]),t._v(" folder in the root of your Flarum installation, and then run this command to tell Composer that it can find packages in here:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("composer config repositories.0 path "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packages/*"')]),t._v("\n")])])]),a("p",[t._v("Now let's start building our first extension. Make a new folder inside "),a("code",[t._v("packages")]),t._v(" for your extension called "),a("code",[t._v("hello-world")]),t._v(". We'll put two files in it: "),a("code",[t._v("extend.php")]),t._v(" and "),a("code",[t._v("composer.json")]),t._v(". These files serve as the heart and soul of the extension.")]),t._v(" "),a("h3",{attrs:{id:"extend-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extend-php","aria-hidden":"true"}},[t._v("#")]),t._v(" extend.php")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("extend.php")]),t._v(" file is just like the one in the root of your site. It will return an array of extender objects that tell Flarum what you want to do. For now, just move over the "),a("code",[t._v("Frontend")]),t._v(" extender that you had earlier.")]),t._v(" "),a("h3",{attrs:{id:"composer-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-json","aria-hidden":"true"}},[t._v("#")]),t._v(" composer.json")]),t._v(" "),a("p",[t._v("We need to tell Composer a bit about our package, and we can do this by creating a "),a("code",[t._v("composer.json")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"acme/flarum-hello-world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Say hello to the world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flarum-extension"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flarum/core"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.0-beta.8"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"psr-4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Acme\\\\HelloWorld\\\\"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extra"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flarum-extension"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fas fa-smile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#238c59"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("strong",[t._v("name")]),t._v(" is the name of the Composer package in the format "),a("code",[t._v("vendor/package")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("You should choose a vendor name that’s unique to you — your GitHub username, for example. For the purposes of this tutorial, we’ll assume you’re using "),a("code",[t._v("acme")]),t._v(" as your vendor name.")]),t._v(" "),a("li",[t._v("You should prefix the "),a("code",[t._v("package")]),t._v(" part with "),a("code",[t._v("flarum-")]),t._v(" to indicate that it’s a package specifically intended for use with Flarum.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("description")]),t._v(" is a short one-sentence description of what the extension does.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("type")]),t._v(" MUST be set to "),a("code",[t._v("flarum-extension")]),t._v('. This ensures that when someone "requires" your extension, it will be identified as such.')])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("require")]),t._v(" contains a list of your extension's own dependencies.")]),t._v(" "),a("ul",[a("li",[t._v("You'll want to specify the version of Flarum that your extension is compatible with here.")]),t._v(" "),a("li",[t._v("Since Flarum is still in beta, do "),a("strong",[t._v("not")]),t._v(" specify a version range or prefix for the Flarum version, otherwise your extension may become installable on future incompatible beta versions.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("autoload")]),t._v(" tells Composer where to find your extension's classes. The namespace in here should reflect your extensions' vendor and package name in CamelCase.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("extra.flarum-extension")]),t._v(" contains some Flarum-specific information, like your extension's display name and how its icon should look.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("title")]),t._v(" is the display name of your extension.")]),t._v(" "),a("li",[a("strong",[t._v("icon")]),t._v(" is an object which defines your extension's icon. The "),a("strong",[t._v("name")]),t._v(" property is a "),a("a",{attrs:{href:"https://fontawesome.com/icons",target:"_blank",rel:"noopener noreferrer"}},[t._v("Font Awesome icon class name"),a("OutboundLink")],1),t._v(". All other properties are used as the "),a("code",[t._v("style")]),t._v(" attribute for your extension's icon.")])])])]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://getcomposer.org/doc/04-schema.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("the composer.json schema"),a("OutboundLink")],1),t._v(" documentation for information about other properties you can add to "),a("code",[t._v("composer.json")]),t._v(".")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("Use the "),a("a",{attrs:{href:"https://github.com/ReFlar/extension-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReFlar extension generator"),a("OutboundLink")],1),t._v(" to automatically create your extension's scaffolding.")])]),t._v(" "),a("h3",{attrs:{id:"installing-your-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-your-extension","aria-hidden":"true"}},[t._v("#")]),t._v(" Installing Your Extension")]),t._v(" "),a("p",[t._v("The final thing we need to do to get up and running is to install your extension. Navigate to the root directory of your Flarum install and run the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("composer require acme/flarum-hello-world *@dev\n")])])]),a("p",[t._v("Once that's done, go ahead and fire 'er up on your forum's Administration page, then navigate back to your forum.")]),t._v(" "),a("p",[a("em",[t._v("whizzing, whirring, metal clunking")])]),t._v(" "),a("p",[t._v("Woop! Hello to you too, extension!")]),t._v(" "),a("p",[t._v("We're making good progress. We've learned how to set up our extension and use extenders, which opens up a lot of doors. Read on to learn how to extend Flarum's frontend.")])])},[],!1,null,null,null);e.default=n.exports}}]);