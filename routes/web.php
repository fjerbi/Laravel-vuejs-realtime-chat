<?php



Route::get('/', function () {
    return view('welcome');
});

Route::get('chat', function(){
    return view('chat');
});