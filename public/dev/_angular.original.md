# Aquent Expert Interview Data Points
The following are proposed data points to capture during an Expert Interview.  Note data points are not communicated back to Aquent.  They are used to automatically derive and generate the higher-level metrics sent back to Aquent.

The following data points will be placed into an optimized UI allowing for one-click entry of a result to help speed up interviews and capture normalized data about a talent.

## Global
### Talent's First Name
We are separating out the first and last name to aid in future taxonomies.

### Talent's Last Name
We are separating out the first and last name to aid in future taxonomies.

### Agent's Email
Used to determine where to automatically email HTML report.

### Talent Title
The title the talent most identifies with such as UX Designer, Front-end developer, dev-ops, API Engineer, Angular Developer, etc.  This can aid in future relevance search results as a talent further refines their core focus.

### Gender
Necessary for automatic pronoun generation.

### Years of experience
Self-explanatory

## Operations
Operation data points outline areas of expertise that affect the general operation, or flow, of a project and may apply to multiple disciplines.  For example, a project manager that can make small code tweaks in a Git repo, perform a deployment or manage an issue tracker may be beneficial to a client.

### Likes working in teams
Does the talent generally like working with other people or prefer to work alone.

### VCS
Does the talent have experience with with a version control system.

### VCS Deployment
Does the talent have experience using a VCS technology or other advanced deployment technique to deploy code as opposed to manual methods such as FTP.

### Issue tracking
Does the talent have experience working with Issue/Bug Trackers such as Jira, Github Issues, YouTrack, Trello, Basecamp, etc...  Often times someone will confuse this with debugging and can be extremely telling if they have worked on any project of scale. Asking how a stakeholder communicates desired changes to their work can help clarify.

## Presentational Layer
This ares primary focuses on how things look.

### Media Queries
Can the talent write media queries?

### Media query placement
Does the talent group all media queries at the top/bottom of each file, separate files, or do they place them along with the rules they affect?

### CSS file organization
How well does the talent organize CSS files?  Do they place code all on one file?  Do they separate them out by display size or device, or do they separate them out by component/module?

### Mobile-first
Does the talent understand that mobile-first means writing styles or media queries for smaller window sizes affects larger sizes unless overridden? Do they understand why this is desired even if they don't practice it?

### Pre-compilers
Does the talent use either Sass or LESS.  If so, it is just for variables and nesting or do they take advantage of more advanced areas such as mixins?  Do they use the pre-compiler to help them write responsive code such as using a mixin to write media queries?  How do they compile the code into CSS?  Do they use a stand-alone app or integrate the process into a larger workflow via Grunt/Gulp?  Do they know why libsass is favored over Ruby Sass.  They goal is to get a feel for how well they understand pre-compilers and the reasons to use them.

### Responsive Libraries
Does the talent understand how to effectively use Bootstrap and/or Foundation?  Are they reliant on it or can they bend it to accomplish client/project objectives and requirements?

### High-density Images
Does the talent understand how to correctly manage imagery for high-density (Retina) displays?  Do they take advantage of icon fonts or SVG graphics?  If so, have they ever made an icon-font or are they still using older image sprite and @2x approaches?

### Cross-browser compatibility
Does the user have the necessary tools to identify and fix cross-browser issues?  Do they borrow a friend's Android or iOS phone? Do they understand how to use services like caniuse.com?  Do they think that Chrome's device emulation is an accurate way to test mobile devices? The goal is to identify how well they both understand how to diagnose issues as well as how well they have cross-browser CSS and JS support memorized.

## Behavioral Layer
This ares primary focuses on how things function and interact.

### HTML5
Do they understand HMTL5 Javascript APIs such as Canvas, Web Workers, App Cache, Geolocation, etc or do they confuse HTML5 semantic element tags with an overall understanding of HTML5?

### jQuery
Do they understand jQuery's API well?  Do they understand it's role as DOM selection and manipulation library or do they think it's a framework?

### AJAX
Do they understand how to correctly manage asynchronous data using promises?  Identify what method they use to perform AJAX requests such as jQuery's .get() or Angular's $http and ask what is the return type. If the answer is not a promise, they have limited SPA and AJAX experience beyond basic DOM manipulation.  Do they understand what header triggers the .error() callback?

### Javascript file organization
How well does the talent organize JS files?  Do they place code all on one file?  Do they separate them out?  If so, how do they concatenate them if at all? 

### Javascript frameworks
Does the talent have experience with any specific JS framework?  If so, the answers to the previous questions and in the _Build_ section will help tell you how much. How well does the talent understand writing object-oriented code in a client-side language?  Do they understand OO concepts including inheritance, separation of concerns (SOC), don't repeat yourself (DRY), and other computer science principles as it applies to both vanilla JS and the framework in question?

## Data Layer
This area primary focuses on how data is managed and served.

### CMS Theming
How well does the talent understand a CMS server-side API? Do they understand how to correctly extend, modularize and and expose the presentational layer to a CMS?

### CMS development
How well does the talent understand modifying, augmenting and extending functionality outside the core features a CMS provides using the CMSes server-side language?

### Server-side language
How well does the talent understand writing object-oriented code in a server-side language?  Do they understand OO concepts including inheritance, separation of concerns (SOC), don't repeat yourself (DRY), and other computer science principles?

### Databases
How well does the talent understand how to interact with data in a datastore?  Do they understand the use of object relational mappers (ORMs), normalization, triggers, foreign keys vs related IDs, stored procedures, and noSQL benefits?

### Server-side framework
How well does the talent understand a server-side framework such as Rails, Node (Sails, Express, etc), Djanjo, Laravel, Zend, Symphony, MVC5, Spring, etc...  Answers to the _Server-side language_ question can also tell you.

### APIs
Do they understand how to consume an API or also create one?  Do they understand CORS principles, HTTP status codes and authentication techniques?

## Build
### Task runners and package managers
Has the talent ever used a package manger such as Bower or task runner such as Gulp or Grunt?  If so, how?  Are they using it just to compile and concatenate CSS/JS or are they doing something more?

### Unit testing
Have they ever performed unit testing?  Do they confuse unit testing with debugging?  How do they run the tests?

### Dev-ops
Have they ever had to set up or manage web servers beyond control panel configuration?  Do they understand SSH, key pairs, v-host configurations, OS management, server requisitions, etc...

## Grading
Each data point is graded on a color code scale and used by an algorithm to generate a rating against desired metrics.

    0 = No color - No experience
    1 = Red - Little experience
    2 = Yellow - Moderate experience
    3 = Green - Heavy experience
    
## Notes
Each individual metric as well as the form as a whole should contain an area for specific notes so clients can drill down further.

## Screenshots
An area allowing images to be uploaded should be available to reviewers.  These images are of either a visual image of a working website/app or of code blocks.  Each should include arrows with short descriptive text calling out something to note.  Either something done well or poorly.

## Output Metrics
The output should be an HTML email containing a chart indicating where a particular developer's strength areas fall.  The specific metrics can be mapped to any paradigm needed.  For example, if an agent wanted to know how well a developer knows Angular, it would be a collection of quite a few weighted data points. Eventually a consumption UI can be created allowing clients to drill-down to see what data points made up "Angular" and their weight that was used to derive a total rating.  For example, an Angular developer that does not know a version control tool may struggle with an Angular project even if they know Angular well when compared to other developers on a team.  This is why it's critical to factor in many data points to determine how "well" any individual skill, such as SEO, is actually possessed.

## Non-developers
If a non-developer is being interviewed, we can simply make a designer version of this or the Expert can only use the notes and upload areas.