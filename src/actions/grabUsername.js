import {Page} from "@/models/page";
export default async function grabUsername(formData)
{
    'use server'
    const username = formData.get('username');
    return await Page.create({uri:username});
}