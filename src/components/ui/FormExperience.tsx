'use client'
import React, { useEffect, useRef, useState } from 'react'
import SelectExperience from './SelectExperience'
import { todo } from 'node:test';
{/*TO-DO: 
        => Validar segundo select
        => Interfaz para formulario más innovadora*/}
const experienceMap = new Map<string, string[]>([
    ["España", ["Turismo", "Estudiante", "Trabajo"]],
    ["Francia", ["Turismo", "Estancia Permanente"]],
    ["Malta", ["Estudiante", "Trabajo"]]
]);

const FormExperience = () => {
    const [inputControl, setInputControl] = useState<string[]>();
    const selectRef = useRef<HTMLSelectElement>();

    useEffect(() => {
        document.addEventListener("click", handleSelectValue, true)
    })

    const handleSelectValue = (e: { target: any; }) => {
        if (selectRef.current?.contains(e.target) && e.target.value != "first") {
            setInputControl(experienceMap.get(e.target.value))
        }
        if (selectRef.current?.contains(e.target) && e.target.value == "first") {
            setInputControl(undefined);
        }
    }

    return (
        <div className='flex flex-col gap-2 bg-[#9966FF] mt-2 p-2 rounded-lg shadow-lg z-30'>
            <SelectExperience label='Elige un país' data={Array.from(experienceMap.keys())} refElement={selectRef} />
            {inputControl && <SelectExperience label='Escoge una aventura' data={inputControl} />}
            {inputControl &&
                <button className='bg-[#FF6699] w-[150px] h-[40px] mx-auto shadow text-center items-center justify-center rounded-[50px] text-white font-semibold font-league text-lg'>
                    Enviar
                </button>}
        </div>
    )
}

export default FormExperience