
<?php
// $db=new PDO('mysql:host=localhost;dbname=BBMS','root','');
// session_start();
include 'DatabaseConnect.php';
?>
<!DOCTYPE html>
<html>

<head>
<title>Admin Login</title>
</head>

<body>
      
<div id="full">
   <div id="inner_full">
      <div id="header"><a href="AdminHomePage.php" style="text-decoration: none;color: white;"><h4>Cab-hiring Management System</h4></a></div>
      <div id="body">
<br><br>
         <?php
         $admin_username=$_SESSION['admin_username'];

         if(!$admin_username)
          {
           header("Location:AdminHomePage.php");
          }

          ?>

         <h3>Welcome Admin</h3><br><br>
                <p align="center"><a href="AdminLogout.php">Logout</p>
              </div>
        </div>
</div>
</body>
</html>
