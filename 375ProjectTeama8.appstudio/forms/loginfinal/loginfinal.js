// This is your blank starting team project - Dr. C
let query = ""
let req = {}
let pw = "M@ggie18"
let netID = "raw51419"
let database = "375groupa8"
let results = []


loginsbmt.onclick=function(){
  let userID=userinpt.value
  let master_pass=passinpt.value
  query = "SELECT username, master_pass FROM useractmain WHERE username=`"+userID+"` AND master_pass=`"+master_pass+"`"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  
  
  
}


