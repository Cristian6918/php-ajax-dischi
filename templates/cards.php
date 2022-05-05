<?php
include(__DIR__ . "/../data.php");



foreach ($albums as $album) {
    echo ("
    <div class='ct-card '>
      <div class='image-container '>
          <img src= '" .  $album["poster"] . "' alt='" . $album["title"] . "'>
      </div>
      <div class='text-container'>
          <h2>" . $album["title"] . "</h2>
          <p>" . $album["author"] . "</p>
          <p>" . $album["year"] . "</p>
      </div>

  </div>");
}
