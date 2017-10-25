function clickSubmit()
{
  var a=document.forms["member_form"]["username"].value;
  var b=document.forms["member_form"]["passwd"].value;
  var c=document.forms["member_form"]["passwd_conf"].value;
  var d=document.forms["member_form"]["first_name"].value;
  var e=document.forms["member_form"]["last_name"].value;
  var f=document.forms["member_form"]["email"].value;
  var g=document.forms["member_form"]["phone"].value;
  var h=document.forms["member_form"]["city"].value;
  var i=document.forms["member_form"]["zip"].value;
  var j=document.forms["member_form"]["state"].value;
  var k=document.forms["member_form"]["branch"].value;
  
if (a==null || a=="" || b==null || b=="" || c==null || c=="" || d==null || d=="" ||
e==null || e=="" || f==null || f=="" || g==null || g=="" || h==null || h=="" ||
i==null || i=="" || j==null || j=="" || k==null || k=="")
  {
    alert('Some fields are not filled in. Please complete the entire form.');
	return false;
  }
    document.getElementById("member_form").submit();
};
