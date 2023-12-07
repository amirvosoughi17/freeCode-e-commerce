export const metadata ={
    title : "Add Product - Flowmazon"
}

export default function AddProductPage(){

    async function addProduct (formData : FormData) {
        "use server"

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
                <button className="btn btn-accent btn-block" type="submit" >Add Product</button>
            </form>
        </div>
    )
}