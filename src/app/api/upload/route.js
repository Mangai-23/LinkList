export async function POST(req) {
    const formData = await req.formData();
    if(formData.has('file')){
        const file = await formData.get('file');
        console.log(file);
    }

}