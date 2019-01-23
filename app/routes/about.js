import Route from '@ember/routing/route';

export default Route.extend({
    model () {
        //stub
           return {
               name: {
                   first: 'Chuck',
                   last: 'Grimmett'
               },
               headshot: {
                   imageURL: 'http://www.cagrimmett.com/img/cag_2018.jpg'
               },
               bio: "Product manager @discoverpraxis. Right now I'm into building a kayak, carving spoons, cooking, and mixing drinks. Subject to change with my whims.",
               social: {
                   facebook: 'https://facebook.com/cagrimmett',
                   twitter: 'https://twitter.com/cagrimmett',
                   instagram: 'http://instagram.com/cagrimmett',
                   linkedin: 'https://www.linkedin.com/in/chuck-grimmett-b0a406139/',
                   github: 'https://github.com/cagrimmett'
               }
           }   
       }
});
