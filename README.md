# Internationalization-AngularJS
Sample app on Internationalization using AngularJS. 

# Environment setup
Install node and npm

# Setup Application
Go to project directory and run *npm install*.

# Run Application
Go to project directory and run *npm start*. 
Go to browser and visit http://localhost:7777/ 

# Locale file directory 
   Dir: *app/locale/*
   
   Every file name has prefix *LOCALIZ_* and after prefix langauge code and country code.
   
   Filename: *LOCALIZ_en_US.json then en_US is a language and country code.* 
   
   We have to pass same language and country code i.e.(en_US) to the app also.
   
   During app initialization we are using the same code.
   
   And AngularJs will find the translate tag in the html and will translate it as per definition. 
   
   We can also change language during runtime. Just pass language and country code to the provider.
   
   
   

   
