<?php
$dh=opendir("c:/xampp/htdocs/bat630pm");
while($file=readdir($dh))
{
	echo "$file";
	echo "\n";
}