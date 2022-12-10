export const storeData = (values) =>{
        window.localStorage.setItem("userID",values.id)
        window.localStorage.setItem("bio",values.bio)
        window.localStorage.setItem("name",values.name)
        window.localStorage.setItem("photo",values.photo)
        window.localStorage.setItem("userName",values.userName)
}
export const getUserID = () =>{
     return  window.localStorage.getItem("userID")
}
export const getUserNicName = () =>{
     return  window.localStorage.getItem("name")
}
export const getUserPhoto = () =>{
     return  window.localStorage.getItem("photo")
}
export const getUserBio = () =>{
     return  window.localStorage.getItem("bio")
}
export const getUserName = () =>{
     return  window.localStorage.getItem("userName")
}
export const logOut = () =>{
        window.localStorage.clear()
}