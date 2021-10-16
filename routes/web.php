<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    return view('index');
})->where('any', '^(?!api\/)[\/\w\.\,-]*');

Route::get('/api/users', function () {
    return '{}';
});
