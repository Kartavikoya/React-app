import { useState } from "react";

// props component with increment behavior
const AllBrand =  [
    {id: "1", brandName: 'Puma'},
    {id: "2", brandName: 'Adidas'},
    {id: "3", brandName: 'Fila'},
    {id: "4", brandName: 'Rebook'}
];
    
function Brand() {
    const [search, setSearch] = useState();
    const [brands, setBrands] = useState(AllBrand);

    const onSearchChange = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        const filterBrands = AllBrand.filter(brand => 
            brand.brandName.toLowerCase().includes(newSearch.toLowerCase())
        );
        setBrands(filterBrands);
        // console.log(filterBrands);
    }
    
  return (
    <>
        <input onChange={onSearchChange} placeholder="Please enter your name" />
        <ul>
            {
                brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
            }
        </ul>
        
    </>
  );
}

export default Brand;
