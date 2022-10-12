import * as CheckboxOrigin from '@radix-ui/react-checkbox'
import { ReactNode } from 'react';
import { Check} from 'phosphor-react'

export interface CheckboxProps {

}
export function Checkbox({}: CheckboxProps) {
   
    return (
        <CheckboxOrigin.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" >
            <CheckboxOrigin.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
            </CheckboxOrigin.Indicator>
        </CheckboxOrigin.Root>
          
        
    )
}