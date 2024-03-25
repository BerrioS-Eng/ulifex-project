import React, { MutableRefObject } from 'react'

interface dataProps {
    label: string;
    data: string[];
    refElement?: any;
}

const SelectExperience = (props: dataProps) => {
    return (
        <div>
            <select ref={props.refElement} className='block w-full h-11 appearance-none shadow-inner bg-[#E9E9E9] border-2 border-white text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:text-gray-700' id="grid-state">
                <option key={'0'} value={'first'}>{props.label}</option>
                {props.data.map((item: string) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    )
                })}
            </select>

        </div>
    )
}

export default SelectExperience