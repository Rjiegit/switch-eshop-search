<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/search', function(Request $request){

    $data = [
        [ 'title' => 'arms', 'imageUrl' => 'https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Arms_image500w.jpg', 'descrition' => 'ARMS for Nintendo Switch lets you trade blows using extendable arms in a unique multiplayer fighting game!', 'price' => 'TWD 1,763.70' ],
        [ 'title' => 'arms', 'imageUrl' => 'https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Arms_image500w.jpg', 'descrition' => 'ARMS for Nintendo Switch lets you trade blows using extendable arms in a unique multiplayer fighting game!', 'price' => 'TWD 1,763.70' ],
        [ 'title' => 'arms', 'imageUrl' => 'https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Arms_image500w.jpg', 'descrition' => 'ARMS for Nintendo Switch lets you trade blows using extendable arms in a unique multiplayer fighting game!', 'price' => 'TWD 1,763.70' ]
    ];

    return collect($data);
});