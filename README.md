# Web App From Scratch @cmda-minor-web 2020 - 2021

# App description
Always wanted to quickly search for a specific gif? ***Gifinder*** is here! By simply typing a word of choice, you will get 20 gifs that meet your requirements!

[Used API](https://developers.giphy.com/docs/api/)

<br/>

# To Do
- [x] Translate readme to English
- [ ] Split code up in to modules
- [ ] Link modules to each other
- [ ] Update actor diagram
- [ ] Make interaction diagram
- [ ] Add c
- [ ] Describe design patterns used

<br/>

# Weekly log

## Week 1 - Hello API 🐒
*Goal: Retrieve data from an API and render it in an overview page.*

This weeks [Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-1.md) & [Slides](https://docs.google.com/presentation/d/1hXfgIhBzJ2QXDmpKpMcx7G-a9R_fVrcPdeOyM3G0I00/edit?usp=sharing)

### How it went
#### Monday, February 1st
- [x] Introduction to the course
- [x] Put personal data into the Tribe API 
- [x] Made my [business card](https://lisaoude.github.io/kickoff-2021/)

<br/>

#### Tuesday, February 2nd
- [x] Wrote basic HTML form ym app
- [x] Retrieved data from my chosen [API](https://developers.giphy.com/docs/api/)
- [x] Added basic CSS styling
- [x] Made it possible to let the user search for specific gifs


<br/>


## Week 2 - Design and Refactor 🛠
*Goal: Design the web app. Add routes and states. Split code into modules. Rendering detail page.*

This weeks [Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-2.md) & [Slides](https://docs.google.com/presentation/d/1ycANqFk9LtrZCBJF2TyQ1c_bejjEctSlb-52xbK_P1g/edit?usp=sharing)


### How it went
#### Monday, February 8th
Had a bit of a rough day, it all felt like a lot to still do and didn't really know where to start. So decided to take it easy!
- [x] Split some of my code up & got rid of 'waterfalls'
- [x] *Tried* making the [first version of my Actor Diagram](https://github.com/lisaoude/web-app-from-scratch-2021/blob/master/images/v1_actordiagram.png)

<br/>

#### Tuesday, February 9th
- [x] Had a JavaScript Fundamentals meeting (see annotations below).

<br/>

#### Annotations JavaScript Fundamentals 
**Loading the script**
- At the bottom of the HTML
- Or: at the top, in the head with:
    - ```<script defer src="js/main.js"></script>```
        - Makes the script wait to be carried out until after all HTML has been loaded

    - ```<script type = 'module' src="js/main.js"></script>```
        - With type module the script automatically defers
        - Main script **needs** to have type module to work

<br/>

**Modules**
- Modules are scoped
- Modules only work on a web server or local host
- Modules are deferred by default
- Main script **needs** to have type module to work

<br/>

**Scope**
- ***Local scope***
    - *Block scope*
        - ```{ const heading = document.querySelector('h1') }```
        - A ```const``` within curly brackets can only be used within those brackets

    - *Function scope* or *Lexical scope*
        - ```function getHeading { var heading = (..); }```
        - A variable within this function can only be used within this function

- ***Global scope***
        - ```const``` 
        - A ```const``` outside of any functions can be used within the entire document

<br/>

**Hoisting**
- Hoisting code up 'above' the functions

<br/>

**Function declarations**
- ```function one() { (..) }```

**Function expression**
- ```const func = function (one) { (..) }```

<br/>

**General**
- ```[array literal]```
- ```{object literal}```

- Browser -> sources
    - Shows which things 'live' inside a scope 

- Call stack -> waitinglist 


<!--In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develop your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of how API's, frameworks and libraries work.-->

<!--## Learning goals-->

<!--
* _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
* _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
* _You understand how you can work with an external API using asynchronous code_
* _You understand how you can manage state in your application and you inform the user of state where necessary_
-->

<!--
[Rubric](https://docs.google.com/spreadsheets/d/1vJJ4EhIqkefWj1nWFp0Pnvy1Kld-S2V3qwZgC6XQO0c/edit?usp=sharing), with learning goals
[Overall planning](https://teams.microsoft.com/l/file/95EAEC95-4AB8-4E62-A810-2445969460B6?tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7&fileType=xlsx&objectUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt%2FShared%20Documents%2F02%20-%20Web%20App%20From%20Scratch%2FWAFS%202021%20Planning.xlsx&baseUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt&serviceName=teams&threadId=19:9bd8abc7b32c4e0196ddbaae12cf8e79@thread.tacv2&groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3)
-->








<!--### Week 3 - Wrapping up 🎁-->

<!--
Goal:
Manipulate data. Reflect on end result
-->

<!--[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-3.md)-->

<!--[Slides](https://docs.google.com/presentation/d/1yZi-ODpENKHMr0-kpKmnCI6dGSgXS9oeLxMXCJnieic/edit?usp=sharing)-->

<!--
## Best Practices
All work during this course will be tested against our [Best Practices for JavaScript](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md).
-->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
