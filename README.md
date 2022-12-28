# laravel-react-crud


links:

https://laravel.com/


terminal:
composer create-project laravel/laravel api


***********************
create mysql db laravel_react_crud_api_db

change code:
/api/.env 
DB_DATABASE=laravel_react_crud_api_db

************
terminal:
php artisan make:model Product -m

//model created.


******************
terminal:
php artisan make:controller Api/ProductController --api

//controller created

*******************
terminal: 
php artisan migrate

//created migration tables
