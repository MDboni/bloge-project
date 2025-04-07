import axios from "axios";

const BaseUrl = "https://basic-blog.teamrabbil.com/api" ;

export async function postCategories() {
   let res = await axios.get(BaseUrl+"/post-categories");
    if(res.status===200){
        return res.data
    }else{
        return []
    }
}

export async function postLatest() {
   let res = await axios.get(BaseUrl+"/post-newest");
    if(res.status===200){
        return res.data
    }else{
        return []
    }
}

export async function postByCategory(id) {
   let res = await axios.get(BaseUrl+"/post-list/"+id);
    if(res.status===200){
        return res.data
    }else{
        return []
    }
}

