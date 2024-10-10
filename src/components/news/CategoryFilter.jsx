import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const CategoryFilter = ({ onCategoryChange }) => {
    const categories = ['all', 'tech', 'health', 'sports', 'business']
    return (
        <div className='flex items-center justify-center gap-2'>
            <h3 className='flex-shrink-0 text-lg font-bold'>Filter by Category:</h3>

            <Select onValueChange={(value) => onCategoryChange(value === 'all' ? '' : value)}>
                <SelectTrigger className="w-[180px] border rounded-md capitalize">
                    <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((category) => (
                            <SelectItem key={category} value={category} className='capitalize'>
                                {category}
                            </SelectItem>
                        ))
                    }

                </SelectContent>
            </Select>

        </div>
    )
}

export default CategoryFilter