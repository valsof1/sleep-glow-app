// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/vista/',
    	url: 'vista.html',
    	name: 'vista',
  		},
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/swiper/',
    	url: 'swiper.html',
    	name: 'swiper',
  		},
		{
		path: '/checkout/',
    	url: 'checkout.html',
    	name: 'checkout',
  		},
		{
		path: '/contacto/',
    	url: 'contacto.html',
    	name: 'contacto',
  		},
		{
		path: '/taza1/',
    	url: 'taza1.html',
    	name: 'taza1',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/taza2/',
    	url: 'taza2.html',
    	name: 'taza2',
  		}
		,
		{
		path: '/carrito/',
    	url: 'carrito.html',
    	name: 'carrito',
  		},
		{
		path: '/acercadenosotros/',
    	url: 'acercadenosotros.html',
    	name: 'acercadenosotros',
  		},
		{
		path: '/comprar/',
    	url: 'comprar.html',
    	name: 'comprar',
  		},
		{
		path: '/lampara2/',
    	url: 'lampara2.html',
    	name: 'lampara2',
  		},
		{
		path: '/lampara1/',
    	url: 'lampara1.html',
    	name: 'lampara1',
  		}
	
		
		
		
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





