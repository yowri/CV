var skills = 
[
  { 'TXT':'WEB',
    'COLOR':'#03407c',
    'CLASS':'web',
    'SKILL':
     [
        {
          'VALUE':85,
          'TXT':'JAVASCRIPT',
          'INFO':'Javascript is my favorit language and i practise it alot. The reason why i like it beceause it is so open source, the future it has, all the options u have and u got alot of awesom frameworks and libraries like angular.',
          'EXTRA':[
            {
              'VALUE':60,
              'TXT':'NODEJS'
            },
            {
              'VALUE':30,
              'TXT':'ANGULARJS 2'
            },
            {
            	'VALUE':20,
            	'TXT': 'ANGULARJS'
            },
            {
              'VALUE':90,
              'TXT': 'JQEURY'
            },
            {
              'VALUE':55,
              'TXT': 'AJAX'
            },
            {
              'VALUE':50,
              'TXT':'ES2015'
            },
            {
            	'VALUE':85,
            	'TXT':'BASICS'
            }
          ]
        },
        {
          'VALUE':90,
          'TXT':'HTML5/CSS3',
          'INFO':'This come naturaly to me atleast the core. I know how to create a layout, integrate designs and animations. I understand the importancy of it (the front-end).',
          'EXTRA': [
            {
              'VALUE':85,
              'TXT':'MATERIALIZE'
            },
            {
              'VALUE':80,
              'TXT':'BOOTSTRAP'
            },
            {
              'VALUE':80,
              'TXT': 'LESS'
            },
            {
              'VALUE':70,
              'TXT': 'SASS'
            },
            {
              'VALUE':75,
              'TXT': 'CSS ANIMATIONS'
            },
            {
              'VALUE':90,
              'TXT': 'BASICS'
            }
          ]
        }
        ,
        {
          'VALUE':65,
          'TXT':'PHP/MYSQL',
          'INFO':'At my intern ship i created a full website in drupal 7 with alot of back-end php.',
          'EXTRA': [
            {
              'VALUE':60,
              'TXT':'DRUPAL 7'
            },
            {
              'VALUE':65,
              'TXT':'MYSQL'
            },
            {
              'VALUE':55,
              'TXT': 'BEHAT'
            },
            {
              'VALUE':75,
              'TXT': 'BASICS'
            }
          ]
        }
      ]    
	},
  { 'TXT':'ADDITIONS',
    'COLOR':'#ff9800',
    'CLASS':'additions',
    'SKILL':
     [
        {
          'VALUE':60,
          'TXT':'GIT',
          'INFO':'I know the basics of git in the shell.'
        },
        {
          'VALUE':55,
          'TXT':'C#',
          'INFO':'I know the basics of C# and i learned alot about structures of programming like MVC and MVVM, also their data integration Entity Framework i know how to work with.'
        },
        {
          'VALUE':60,
          'TXT':'JAVA/ANDROID',
          'INFO':'With Java i learned the basics and with especially with JAVA i understood what OOP is and how u use it. Android i know the basics.',

        },
        {
          'VALUE':65,
          'TXT':'DOCKER',
          'INFO':'I know how to up and run projects easily in docker. I learned this one in my internship and i love this one for running containorized virtual machines.',

        },
        {
          'VALUE':70,
          'TXT':'GOOGLE EXTENSION',
          'INFO':'I made one google extension so far in my internship i know how to create an easy extension.',

        }
      ]    
  },
	{ 'TXT':'CHARACTER TRAITS',
    'COLOR':'#D9344A',
    'CLASS':'character',
    'SKILL':
     [
        {
          'VALUE':85,
          'TXT':'CREATIVE',
          'INFO':'I like to try new things and see how they work out. I also think alot about how to improve things or create new things.'
        },
        {
          'VALUE':90,
          'TXT':'RELIABLE',
          'INFO':'I always want to do my job as good as i can and will be honest about it.'
        },
        {
          'VALUE':70,
          'TXT':'PROBLEM SOLVING ABILITY',
          'INFO':'During programming i am getting better and better at this skill to find faster solutions.'
        },
        {
          'VALUE':65,
          'TXT':'FLEXIBEL',
          'INFO':'I can easy adapt to changes and will not get upset easy.'
        },
        {
          'VALUE':65,
          'TXT':'INVOLVEMENT',
          'INFO':'where i work i want to achieve their goals as good as i can.'
        },
      ]    
	 }
]
var experiences = 
[ 
  {
    'ICON':'work'
  },
  {
    'DATE_START':new Date(2016,8),
    'DATE_END':new Date(2017,2),
    'FUNCTION':'intern',
    'EMPLOYEMENT':'internship',
    'TITEL':'UNC INC',
    'TXT':'Learned a lot here about web development in general. also i build a site with an extranet almost on my own and a google extension. also improved my communication skills a lot and working in a collaborative environment. I improved on Javascript, JQuery, PHP, css and HTML mostly.',
  },
  {
    'DATE_START':new Date(2013,2),
    'DATE_END':new Date(2013,7),
    'FUNCTION':'intern',
    'EMPLOYEMENT':'internship',
    'TITEL':'Dynn BV',
    'TXT':'Learned JavaScript, JQuery, HTML, CSS, AJAX NodeJS and worked here made a lot of experience and this has really pushed towards webdevelopment.'
  }
];
var educations = 
[ 
  {
    'ICON':'school'
  },
  {
    'DATE_START':new Date(2013,8),
    'DATE_END':new Date(2017,2),
    'DIPLOMA':'successful',
    'LEVEL':'BOL-4',
    'SECTOR':'ICT',
    'TITEL':'Application development - Graafschapcollege , Netherlands - Doetinchem',
    'TXT':'The courses that I have ( or have had ) are video editing , photography , photoshop, word, excel, powerpoint, Java , C # , HTML / CSS , PHP / MySQL, English , Dutch , numeracy and information analysis. Learned all the basics of programming here.',
  },
  {
    'DATE_START':new Date(2011, 8),
    'DATE_END':new Date(2013, 6),
    'DIPLOMA':'not succeeded',
    'LEVEL':'BOL-4',
    'SECTOR':'technique',
    'TITEL':'engineering - Graafschapcollege , Netherlands - Doetinchem',
    'TXT':'Carpentry, Mason etc , Cutlery drawing in AUTOCAD, Mathematics, Numeracy and theory of building houses. This was not the career path i was looking for eventually.',
  },
  {
    'DATE_START':new Date(2007, 8),
    'DATE_END':new Date(2011, 6),
    'DIPLOMA':'successful',
    'LEVEL':'MBO Level 4',
    'SECTOR':'TL',
    'TITEL':'Ludgercollege, Netherlands - Doetinchem',
    'TXT':'Mathematics, Chemistry, French, Netherlands, English, Crafts, German, History, geography.',
  }
];

var educationsOnline = 
[ 
  {
    'ICON':'computer'
  },
  {
    'DATE_START':new Date(2014, 8),
    'DATE_END':'N.A',
    'DIPLOMA':'N.A',
    'LEVEL':'Beginner',
    'SECTOR':'Webdevelopment',
    'TITEL':'Codeschool',
    'TXT':'<a href="https://www.codeschool.com/users/yorivanloo" target="_blank">My code school card</a>',
  },
  {
    'DATE_START':new Date(2014, 8),
    'DATE_END':'N.A',
    'DIPLOMA':'N.A',
    'LEVEL':'Beginner',
    'SECTOR':'Webdevelopment',
    'TITEL':'Codecadamy',
    'TXT':'<a href="https://www.codecademy.com/yorivanloo" target="_blank">My codecadamy card</a>',
  },

];

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var aboutMe = {
  'FULLNAME' : 'Yori van Loo',
  'PROFESSION' : 'Application/Web developer',
  'QOUTE' : 'Hi , i just started my carreer and i am really enthoustiastic about what programming can offer. Especially the new technologies and innovations in the web world! I also believe that their is no limit in learning, their always comes new things. Thats is why developing a big con to me.',
  'INFORMATION' : {
    'BIRTHDATE' : '19/02/1994',
    'GENDER' : 'Male',
    'MARITAL' : 'Unmarried',
    'LIVING' : 'Diemen the Netherlands'
  }
}