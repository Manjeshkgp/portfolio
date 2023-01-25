import React from 'react'

const Education = () => {
  return (<>
    <div className="flex flex-col gap-6 lg:gap-2 items-end mt-12 h-[calc(100vh-12rem)] mx-6 border-b lg:mx-40">
        <p className="text-base text-[#3be6be]">Higher Secondary Education from KSSHS</p>
        <p className="text-3xl font-bold lg:text-[4rem] text-[#ccd6f6] lg:my-2 text-right">Science Stream, 2022</p>
        <p className="text-base text-[#7c839c] lg:w-1/2 lg:my-2">
          Passed with an overall of 80.2% in Grade 12. I was studying Maths, Chemistry, Physics & Modern Computer Applications during that time.
        </p>
        <p className="text-base text-[#3be6be]">High School Education from KTVPHS</p>
        <p className="text-3xl font-bold lg:text-[4rem] text-[#ccd6f6] lg:my-2 text-right">Matriculation, 2020</p>
        <p className="text-base text-[#7c839c] lg:w-1/2 lg:my-2">
          Passed with an overall of 79.8% in Grade 10. I studied a mixture of almost 8 to 10 subjects including 2 languages (Hindi & English).
        </p>
      </div>
  </>)
}

export default Education;