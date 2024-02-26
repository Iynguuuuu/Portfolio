import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#090f18]'>
            <h1 className='heading'>Technical <span className='text-yellow-400'>Skills</span></h1>
            <br />
            <div className='w-[80%] mx-auto md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                {/* <div>
                    <SkillsItem title="React Developer" year="2014 - 2018" />
                    <SkillsItem title="Developer" year="2014 - 2018" />

                </div>
                <div>
                    <SkillsItem title="React Developer" year="2014 - 2018" />
                    <SkillsItem title="React Developer" year="2014 - 2018" />

                </div> */}
                <div>
                    <SkillsLanguage
                        skill1="HTML"
                        skill2="CSS"
                        skill3="JavaScript"
                        skill4='Java'
                        skill5='PHP'
                        level1="w-[90%]"
                        level2="w-[80%]"
                        level3="w-[75%]"
                        level4="w-[80%]"
                        level5="w-[70%]"
                    />
                </div>
                <div>
                    <SkillsLanguage
                        skill1=" React Js"
                        skill2="Tailwind CSS"
                        skill3="TypeScript"
                        skill4='SQL'
                        skill5='Python'
                        level1="w-[70%]"
                        level2="w-[80%]"
                        level3="w-[60%]"
                        level4="w-[80%]"
                        level5="w-[80%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills