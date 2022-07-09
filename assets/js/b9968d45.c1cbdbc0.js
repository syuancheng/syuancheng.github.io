"use strict";(self.webpackChunksyuan_blog=self.webpackChunksyuan_blog||[]).push([[31],{2220:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],u={slug:"Build blog by Docusaurus and deploy in Git Page",title:"Build blog by Docusaurus and deploy in Git Page",author:"Syuan",author_title:"Back End Engineer @ Shopee",author_url:"https://github.com/syuancheng",author_image_url:"https://avatars1.githubusercontent.com/u/17883920?s=460&v=4",tags:["Blog","docusaurus","Github"]},r=void 0,l={permalink:"/Build blog by Docusaurus and deploy in Git Page",editUrl:"https://github.com/syuancheng/syuancheng.github.io/blog/2022-07-09-build-blog.md",source:"@site/blog/2022-07-09-build-blog.md",title:"Build blog by Docusaurus and deploy in Git Page",description:"Docusaurus will help you ship a beautiful documentation site in no time.",date:"2022-07-09T00:00:00.000Z",formattedDate:"July 9, 2022",tags:[{label:"Blog",permalink:"/tags/blog"},{label:"docusaurus",permalink:"/tags/docusaurus"},{label:"Github",permalink:"/tags/github"}],readingTime:2.895,truncated:!1,nextItem:{title:"regex",permalink:"/regex"}},c=[{value:"Create a new Docusaurus site",id:"create-a-new-docusaurus-site",children:[]},{value:"Project Structure",id:"project-structure",children:[{value:"Project structure rundown",id:"project-structure-rundown",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"1. change config file",id:"1-change-config-file",children:[]},{value:"2. config in github",id:"2-config-in-github",children:[]},{value:"3. set auto-deploy by github action",id:"3-set-auto-deploy-by-github-action",children:[]}]}],d={toc:c};function p(e){var t=e.components,u=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus")," will help you ship a ",(0,i.kt)("strong",{parentName:"p"},"beautiful documentation")," site in no time.\nBuilding a custom tech stack is expensive. Instead, focus on your content and just write Markdown files."),(0,i.kt)("h2",{id:"create-a-new-docusaurus-site"},"Create a new Docusaurus site"),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," and create a new Docusaurus site:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"npx create-docusaurus@latest my-website classic\n")),(0,i.kt)("p",null,"Start the site:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"cd my-website\nnpx docusaurus start\n")),(0,i.kt)("p",null,"Open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000")," and follow the tutorial."),(0,i.kt)("h2",{id:"project-structure"},"Project Structure"),(0,i.kt)("p",null,"Assuming you chose the classic template and named your site my-website, you will see the following files generated under a new directory my-website/:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bigquery"},"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,i.kt)("h3",{id:"project-structure-rundown"},"Project structure rundown"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/blog/ - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the path option. More details can be found in the ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/blog"},"blog guide")),(0,i.kt)("li",{parentName:"ul"},"/docs/ - Contains the Markdown files for the docs. Customize the order of the docs sidebar in sidebars.js. You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the path option. More details can be found in the ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"docs guide")),(0,i.kt)("li",{parentName:"ul"},"/src/ - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/src/pages - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/creating-pages"},"pages guide")))),(0,i.kt)("li",{parentName:"ul"},"/static/ - Static directory. Any contents inside here will be copied into the root of the final build directory"),(0,i.kt)("li",{parentName:"ul"},"/docusaurus.config.js - A config file containing the site configuration. This is the equivalent of siteConfig.js in Docusaurus v1"),(0,i.kt)("li",{parentName:"ul"},"/package.json - A Docusaurus website is a React app. You can install and use any npm packages you like in them"),(0,i.kt)("li",{parentName:"ul"},"/sidebars.js - Used by the documentation to specify the order of documents in the sidebar")),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("h3",{id:"1-change-config-file"},"1. change config file"),(0,i.kt)("p",null,"We have known that ",(0,i.kt)("strong",{parentName:"p"},"docusaurus.config.js")," is a config file that containing the site configuration, so we can change some values of the fields which is about what is shown in home page. apart from this, we have to change the following four attributes, this is very important for deploy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"url: 'https://syuancheng.github.io',\nbaseUrl: '/',\norganizationName: 'syuancheng',\nprojectName: 'syuancheng.github.io',\n")),(0,i.kt)("h3",{id:"2-config-in-github"},"2. config in github"),(0,i.kt)("p",null,"create a new branch ",(0,i.kt)("strong",{parentName:"p"},"gh-pages"),"\n",(0,i.kt)("img",{alt:"image",src:n(5165).Z})),(0,i.kt)("h3",{id:"3-set-auto-deploy-by-github-action"},"3. set auto-deploy by github action"),(0,i.kt)("p",null,"create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yingwinwin/yingwinwin.github.io/blob/master/.github/workflows/documentation.yml"},".github/workflows/documentation.yml")," file in root folder. refer to ",(0,i.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"},"github action hand bool by Ruan Yifeng")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Deploy Github pages\non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout\n      uses: actions/checkout@master\n      with:\n        persist-credentials: false\n    - name: Install and Build\n      run: |\n        npm install\n        npm run-script build\n    - name: Deploy\n      uses: JamesIves/github-pages-deploy-action@releases/v3\n      with:\n        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}\n        BRANCH: gh-pages\n        FOLDER: build\n        BUILD_SCRIPT: npm install && npm run build\n")),(0,i.kt)("p",null,"set ",(0,i.kt)("strong",{parentName:"p"},"ACCESS_TOKEN")," in setting/action\n",(0,i.kt)("img",{alt:"image",src:n(2688).Z})),(0,i.kt)("p",null,"We can check the workflow execution in action of this repo as some change is merged to master branch.\n",(0,i.kt)("img",{alt:"image",src:n(4897).Z})),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://syuancheng.github.io"},"https://syuancheng.github.io")," to check the result."))}p.isMDXComponent=!0},5165:function(e,t,n){t.Z=n.p+"assets/images/blog1_1-6f5e2711c2d7117edd346a24c46e8387.png"},2688:function(e,t,n){t.Z=n.p+"assets/images/blog1_2-39c2a39d371319c8f07f06f53c64c3d1.png"},4897:function(e,t,n){t.Z=n.p+"assets/images/blog1_3-50e406ed10a367f3de0de450dd6ad61d.png"}}]);