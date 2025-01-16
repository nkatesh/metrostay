import { useNavigate } from "react-router";


const category = [
    {
        image: 'https://img.freepik.com/premium-vector/interior-childs-bedroom_1639-6615.jpg?semt=ais_hybrid',
        name: 'Cozy Single'
    },
    {
        image: 'https://img.freepik.com/free-photo/room-dormitory-travel-youth-sleeping_1253-366.jpg?semt=ais_hybrid',
        name: 'Comfort Twin'
    },
    {
        image: 'https://img.freepik.com/free-photo/bedroom-comfortable-relax-living-blanket-concept_53876-147837.jpg?semt=ais_hybrid',
        name: 'Single Comfort A/C'
    },
    {
        image: 'https://img.freepik.com/premium-photo/interior-playroom-two-children-3d-render_391996-460.jpg?semt=ais_hybrid',
        name: 'Twin Comfort A/C'
    },
    {
        image: 'https://img.freepik.com/premium-photo/bedroom-has-working-desk-3d-illustration-sunlit-concept-clean-modern-apartment_39358-54.jpg?ga=GA1.1.146846257.1732862191&semt=ais_hybrid',
        name: 'Premium Single Suite'
    },
    {
        image: 'https://img.freepik.com/premium-photo/deluxe-pool-side-room-type-suvarnabhumi-ville-hotel_41418-2020.jpg?semt=ais_hybrid',
        name: 'Deluxe Twin Sharing'
    },
    {
        image: 'https://img.freepik.com/premium-photo/view-electric-lamp-tiled-floor-home_1048944-23594285.jpg?ga=GA1.1.146846257.1732862191&semt=ais_hybrid',
        name: 'Studio Haven'
    },
    {
        image: 'https://img.freepik.com/premium-photo/pretty-woman-looking-excited-surprised-pointing-side_1194-128248.jpg?ga=GA1.1.146846257.1732862191&semt=ais_hybrid',
        name: 'Budget Friendly Single'
    }
]

const Category = () => {
    
    const navigate = useNavigate();
    return (
        <div className=" mt-14">
            <div className="flex  flex-col mt-5">
              
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                 
                    <div className="flex ">
                      
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px- lg:px-4">
                                  
                                    <div onClick={() => navigate(`/category/${encodeURIComponent(item?.name)}`)} 
                                    className=" w-16 h-16 lg:w-24 lg:h-24 mx-auto rounded-full  bg-white transition-all hover:bg-blue-gray-100 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                          
                                            <img src={item.image} alt="img" 
                                            className="flex rounded-lg object-cover h-20"
                                            />
                                        </div>
                                    </div>

                                 
                                    <h1 className=' text-sm lg:text-[16px] text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

          
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;