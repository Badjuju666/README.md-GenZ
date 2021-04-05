
function generateMarkdown(data, githubInfo, badge) {
    return `
    # **${data.title}**
    - ${badgeStamp(badge)}

    ## Description

    - ${data.description}

    ## Installation

                -${data.installation}
    
    ## Usage
    -${data.usage}

    ## Contribution
    -${data.contribution}

    ## Testing 
    -${data.test}

    ## Repostitory
    -${data.repo}

    ## Questions

                Address any questions or concerns 
                to the contacts below...
                
                ![Imgofme](${githubInfo.githubImage})
                -${githubInfo.name}
                -[Github Profile](${githubInfo.profile})
                -<${githubInfo.email}>
    

    `
}
module.exports = generateMarkdown

const sheildsLink = badge => {
    console.log('license badge:' + badge);

    if (badge === 'Apacge 2.0') {
        return "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
    }  else if (badge === 'Boost') {
        return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    
      } else if (badge === 'GNU') {
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    
      } else if (badge === 'ISC') {
        return 'https://img.shields.io/badge/License-ISC-blue.svg'
    
      } else if (badge === 'MIT') {
        return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    
      } else if (badge === 'Mozilla') {
        return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    
      } else if (badge === 'The Artistic License 2.0') {
        return 'https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg'
    
      } else if (badge === 'The Unlicense') {
        return 'https://img.shields.io/badge/license-Unlicense-blue.svg'
    
      } else {
        return ''

      }
}

const sourceLink = badge => {
    if (badge === 'Apache 2.0') {
        return "https://opensource.org/licenses/Apache-2.0"
    
      } else if (badge === 'Boost') {
        return 'https://www.boost.org/LICENSE_1_0.txt'
    
      } else if (badge === 'GNU') {
        return 'https://www.gnu.org/licenses/gpl-3.0'
    
      } else if (badge === 'ISC') {
        return 'https://opensource.org/licenses/ISC'
    
      } else if (badge === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    
      } else if (badge === 'Mozilla') {
        return 'https://opensource.org/licenses/MPL-2.0'
    
      } else if (badge === 'The Artistic License 2.0') {
        return 'https://opensource.org/licenses/Artistic-2.0'
    
      } else if (badge === 'The Unlicense') {
        return 'http://unlicense.org/'
    
      } else {
        return ''
    
      } 
    
    }

    const badgeStamp = badge => {
        if(badge === 'empty') {
            return ''
        }

        return `
        [![License Link](${sheildsLink(badge)})](${sourceLink(badge)})
        `
    };