var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dobrovv/website.git', // Update to point to your repository  
        user: {
            name: 'dobrovv', // update to use your name
            email: 'vlandobrov@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)