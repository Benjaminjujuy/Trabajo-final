

const PrivateRoutes = ({ children, role }) => {
const token = JSON.parce(sessionStorage.getItem("token"));
const roleUser = JSON.parce(sessionStorage.getItem("role"));

if(!token){
    location.href=`/`
} else {
  if(role === roleUser){
    return children
  }else{
    if(roleUser === `admin`){
        location.href = `/admin`
    }else{
        location.href = `/user`
    }
  }
}
}

export default PrivateRoutes;