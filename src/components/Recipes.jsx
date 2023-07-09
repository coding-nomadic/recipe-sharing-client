import React from 'react'
import Header from "./header/header"

function Recipes({ logOut })
{
    return (
        <div>
            <Header logOut={ logOut } />
            <br />
            Recipes
        </div>
    )
}

export default Recipes