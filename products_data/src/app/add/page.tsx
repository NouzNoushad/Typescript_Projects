export default function AddProduct() {
    return (
        <section>
            <div className="max-w-[600px] mx-auto px-5 xl:px-0 my-[5rem]">
                <form className="bg-black rounded-md px-[20px] py-[40px] space-y-[15px]">
                    <input type="text" placeholder="Enter product name" className="rounded-sm px-[10px] py-[5px] w-full" />
                    <input type="text" placeholder="Enter product brand" className="rounded-sm px-[10px] py-[5px] w-full" />
                    <input type="number" placeholder="Enter product price" className="rounded-sm px-[10px] py-[5px] w-full" />
                    <textarea rows={4} placeholder="Enter product description" className="rounded-sm px-[10px] py-[5px] w-full"></textarea>
                    <div className="flex justify-center sm:justify-end">
                        <button className="border border-white rounded-md px-[15px] py-[5px] text-white font-[500] text-[0.9rem] transition-all duration-300 hover:text-black hover:border-white hover:bg-white">Create Product</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
