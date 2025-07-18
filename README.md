# visanatural
Using Visa Product Design System, create a web app or agentic IDE experience where a developer can describe a UI (for example, “Responsive login form with remember me”).

# Approach
Having worked in industries where the users are generally not as tech savvy as our developer community, I have become accustomed to simplify UI and UX's to maximize minimum user error.
Following a similar approach, my goal was to create an interface as quickly usable as possible by
* Reducing the numbers of options available
* Using succint colors (based off the company's logo) to direct the users eyes towards key elements to get the job done quickly
* Dividing the UI in 2, menus and actions.
* Use of subtle animations to inform the user of changes or actions, one notable being when a user copies the code for an element. In the case where it's composed of HTML and code there would be a subtle shake after the copy and an automatic switch to the code's code to make sure they don't forget the element is composed of 2 parts.
* Implement cues and a similar design language as displayed in https://design.visa.com/ to respect the company or team's design guideline, as it is very important to have a cohesive product group.
* Build the query based off components in the Visa Product Design library with the accompanying documentation 
* Usable on mobile devices, even though it is counter intuitive for this particular case, it's more than likely a good portion of users might be mobile and the web app will still be fully usable.

# Imporovements
In a spirit to respect the allocated time I couldn't add everything I wished. Here are some improvements I would like to make to this current design:
* Directly share code into IDE
* Option for dark mode
* Accessibility options to darken lines around some UI elements (notably those using whitesmoke as a color)
* More refinement on the design, something seems to be missing for a more clear and usable UI
* Better integration with the Visa Design language
* Open to feedback

# Full Stack Implementation
There are many ways functionality could be implemented when it comes to this product. 
Going off the assumption that components must be stitched together based off what's available with the Visa library, a simple approach could be to train an AI model on said components and account for details such as color, placement, style, background while generating the elements. 
I would love to go deeper into the implementation if needed.
