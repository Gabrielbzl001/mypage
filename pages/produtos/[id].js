function Produtos({id}){
    return <div>Id do produto: {id}</div>
}

export async function getStaticPaths(){
    return{
        paths:[{
            params:{
                id: '1'
            }
        },{
            params:{
                id: '2'
            }
        }
    ],
        fallback: 'blockingg',
    }
}

export async function getStaticProps(context){
    const {id} = context.params;

    return{
        props: {
            id
        }
    }
}

export default Produtos;