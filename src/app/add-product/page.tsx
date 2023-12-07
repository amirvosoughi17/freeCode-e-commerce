import FormSubmitButton from '@/components/FormSubmitButton';
import {prisma} from '@/lib/db/prisma'
import { redirect } from 'next/navigation';

export const metadata ={
    title : "Add Product - Flowmazon"
}

export default function AddProductPage(){

    async function addProduct (formData : FormData) {
        "use server";

        const name = formData.get('name')?.toString();
        const description = formData.get('description')?.toString();
        const imageUrl = formData.get('imageUrl')?.toString();
        const price = Number(formData.get('price') || 0);

        if(!name || !description || !imageUrl || !price) {
            throw new Error('Missing required fields');
        }
            
        await prisma.product.create({
            data : {
                name , 
                description ,
                price ,
                imageUrl
            }
        })

        redirect("/");
    }

    return (
        <div className="">
            <h1 className="text-lg mb-3 font-bold">Add product</h1>
            <form action={addProduct}>
                <input 
                   className="mb-3 w-full input input-bordered"
                   required
                   name="name"
                   placeholder="Name"
                />
                <textarea
                  required
                  name="description"
                  placeholder="Description"
                  className="textarea textarea-bordered  mb-4 w-full"
                />
                 <input 
                   required
                   name="imageUrl"
                   placeholder="Image URL"
                   type="url"
                   className="mb-4 w-full input input-bordered"
                />
                 <input 
                   required
                   name="price"
                   placeholder="Price"
                   type="number"
                   className="mb-4 w-full input input-bordered"
                />
                <FormSubmitButton className="btn btn-accent btn-block" >
                    Add Product
                </FormSubmitButton>
            </form>
        </div>
    )
}