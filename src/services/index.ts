


export async function getStudentData(params:any){
    const data = [
        {id:1,name:'cat'},
        {id:2,name:'dog'},
        {id:3,name: params.id},
    ]
    return new Promise(resolve => {
        // @ts-ignore
        setTimeout(resolve, 3000)
    }).then(() => {
        return data;
    })
}
