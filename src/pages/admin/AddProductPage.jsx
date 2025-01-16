import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
    {
        name: 'Cozy Single'
    },
    {
        name: 'Comfort Twin'
    },
    {
        name: 'Single Comfort A/C'
    },
    {
        name: 'Twin Comfort A/C'
    },
    {
        name: 'Premium Single Suite'
    },
    {
        name: 'Deluxe Twin Sharing'
    },
    {
        name: 'Studio Haven'
    },
    {
        name: 'Budget Friendly Single'
    }
]

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity : 1,
        location:"",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });


    // Add Product Function
    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("all fields are required")
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Room Details Added Successfully");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Add product failed");
        }

    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                {/* Login Form  */}
                <div className="login_Form px-8 py-6 border-gray-100 bg-gray-100 rounded-lg shadow-sm shadow-blue-gray-200">

                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-black '>
                            Add Room Details
                        </h2>
                    </div>

                   
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Hotel/PG Title'
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'
                        />
                    </div>

                  
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Room Price'
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'
                            
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            placeholder='Room Image Url'
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'

                        />
                    </div>

                    
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                       className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-500'
>
                            <option disabled value=''>Select Room Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="location"
                            value={product.location}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    location: e.target.value
                                })
                            }}
                            placeholder='Enter Location'
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'
                        />
                    </div>

                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }} name="description" placeholder="Room Description" rows="5" 
                            
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'
                            
                            
                            >

                        </textarea>
                    </div>

                   
                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-black hover:bg-black hover:text-white w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Add Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;
