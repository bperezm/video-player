const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');

$play.addEventListener("click", handlePlay);
$pause.hidden = true;

function handlePlay(){
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

$pause.addEventListener("click", handlePause);

function handlePause(){
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

$backward.addEventListener('click', handleBackward);

function handleBackward() {
    $video.currentTime -= 10;
    console.log('Para atras 10 segundos');
}

$forward.addEventListener('click', handleForward);

function handleForward() {
    $video.currentTime += 10;
    console.log('Para adelante 10 segundos');
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video')
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput) 

function handleInput() {
  $video.currentTime = $progress.value
}