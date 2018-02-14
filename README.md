# KidsBrowserMode 

KidsBrowserMode is a google chrome extension, which acts as a protective layer against cyberbullying and inappropriate content for the kids.
It uses IBM Watson's NLP Library to detect the keywords, context of an article. Further, Watson filters out the hate words by detecting the emotions and intention behind the detected keywords and then replaces the hate words with appropriate synonyms found using Oxford Dictionary API.

# Limitations

* If the synonym of a hate word is not found then it replaces the hate word with '************'

# Technology Stack

* IBM Watson 
* Node.js v8.4.0 
* Express.js
* jQuery
* Oxford Dictionary API
* Hate Base API



