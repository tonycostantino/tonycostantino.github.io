<?php
$lbt = file('little-blue-truck.txt');

foreach ($lbt as $line) {
	$pieces = preg_split('/\s+/', trim($line));
	print_r($pieces);
	foreach ($pieces as  $piece) {
		if (array_key_exists($piece, $words)) {
			$words[$piece]++;
		} else {
			$words[$piece] = 1;
		}
	}
}
ksort($words);


echo json_encode($words);