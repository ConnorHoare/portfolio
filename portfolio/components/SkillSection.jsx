import React from 'react'
import Image from 'next/image';

import {
    next,
    cssIcon, expressIcon, gitIcon, githubIcon,
    htmlIcon, jsIcon, mongodbIcon, muiIcon,
    nodejsIcon, reactIcon, reduxIcon,
    tailwindIcon, typescriptIcon, DarkCssIcon, DarkExpressIcon,
    DarkGitIcon, DarkGithubIcon, DarkHtmlIcon, DarkJsIcon,
    DarkMongodbIcon, DarkMuiIcon, DarkNextIcon, DarkNodeJsIcon,
    DarkReactIcon, DarkReduxIcon, DarkTailwindIcon, DarkTypescriptIcon
} from '../assets';

const lightSkillIcons = [
    { src: reactIcon, height: 150, width: 150, alt: 'icon' },
    { src: next, height: 150, width: 150, alt: 'icon' },
    { src: cssIcon, height: 150, width: 150, alt: 'icon' },
    { src: expressIcon, height: 150, width: 150, alt: 'icon' },
    { src: gitIcon, height: 150, width: 150, alt: 'icon' },
    { src: githubIcon, height: 150, width: 150, alt: 'icon' },
    { src: htmlIcon, height: 150, width: 150, alt: 'icon' },
    { src: jsIcon, height: 150, width: 150, alt: 'icon' },
    { src: mongodbIcon, height: 150, width: 150, alt: 'icon' },
    { src: muiIcon, height: 150, width: 150, alt: 'icon' },
    { src: nodejsIcon, height: 150, width: 150, alt: 'icon' },
    { src: reduxIcon, height: 150, width: 150, alt: 'icon' },
    { src: tailwindIcon, height: 150, width: 150, alt: 'icon' },
    { src: typescriptIcon, height: 150, width: 150, alt: 'icon' }
];

const darkSkillIcons = [
    { src: DarkReactIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkNextIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkCssIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkExpressIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkGitIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkGithubIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkHtmlIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkJsIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkMongodbIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkMuiIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkNodeJsIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkReduxIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkTailwindIcon, height: 150, width: 150, alt: 'icon' },
    { src: DarkTypescriptIcon, height: 150, width: 150, alt: 'icon' }
];

const SkillSection = ({ isDark }) => {
    let iconsToDisplay = [];

    if (!isDark) {
        iconsToDisplay = lightSkillIcons;
    } else {
        iconsToDisplay = darkSkillIcons;
    }

    console.log(isDark)

    return (
        <div className='flex items-center gap-2 flex-wrap justify-around'>
            {
                iconsToDisplay.map((icon, index) => (
                    <div className='flex-shrink-0' key={index}>
                        <Image src={icon.src} height={icon.height} width={icon.width} alt={icon.alt} />
                    </div>
                ))
            }
        </div>
    )
}

export default SkillSection