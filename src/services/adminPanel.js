import supabase from "./services";

async function getPassword(password) {
let { data: Admin_Panel_Password, error } = await supabase
  .from("Admin_Panel_Password")
    .select("admin_password");
  
  console.log(Admin_Panel_Password[0].admin_password);
  
  if (error) {
    alert('there was an error');
  }
  
  
  if(password === Admin_Panel_Password[0].admin_password) {
    return true;
  } else {
    return false;
  }
}

export default getPassword;