function Dogs({anyDog}){
    return(
        <div>
            {anyDog.map((element =>{
                const{id,image} = element;
                return(
                    <div key={id}>
                        <p>{id}</p>
                        <img src={image} alt="dogs" width="300px"/>
                    </div>)
            }))}
        </div>
    )
}

export default Dogs;