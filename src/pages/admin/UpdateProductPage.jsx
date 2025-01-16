import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
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

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

   
    const navigate = useNavigate();
    const { id } = useParams()
    console.log(id)


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

   
    const getSingleProductFunction = async () => {
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
          
            const product = productTemp.data();
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                quantity : product?.quantity,
                time: product?.time,
                location:product?.location,
                date: product?.date
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', id), product)
            toast.success("Room Details Updated Successfully")
            getAllProductFunction();
            setLoading(false)
            navigate('/admin-dashboard')

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getSingleProductFunction();
    }, []);
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
               
                <div className="login_Form px-8 py-6 border-gray-100 bg-gray-100 rounded-lg shadow-sm shadow-blue-gray-200">

                   
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-black '>
                            Update Room Details
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
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'
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
                            }} name="description" 
                            placeholder="Room Description"
                             rows="5"
                            className='bg-gray-50 border text-black border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600'

                             >

                        </textarea>
                    </div>

                    
                    <div className="mb-3">
                        <button
                            onClick={updateProduct}
                            type='button'
                            className='bg-black hover:bg-black hover:text-white w-full text-white text-center py-2 font-bold rounded-md '

                        >
                            Update Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProductPage;
