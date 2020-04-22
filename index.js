const tmi = require('tmi.js');

const fs = require('fs');


// add a line to a lyric file, using appendFile


const options = {
	options: {
		debug: true,
	},
	conection: {
		cluster: 'aws' ,
		reconnect: true,
	},
	identity: {
		username: 'redunicirn',
		password: 'oauth:8rptq7jvo9ergjfx9we9bjhehyrz3a',	
	},
	channels:['redunicirn'],
};

const client = new tmi.client(options);

client.connect();

const prefix = '!'

client.on('connected', (address, port) => {
	client.action('redunicirn', 'Teste');
});



client.on('chat', (channel, user, message, self) =>{
	if (message.includes("!play")){
		var link = message.replace("!play https://www.youtube.com/watch?v=", "");
		client.action('redunicirn', 'Adicionado!');
		let linke = '<iframe class="iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="450" height="250" type="text/html" src="https://www.youtube.com/embed/'+link+'?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode en</a></small></div><div><small><a href="http://add-link-exchange.com">Add-link-exchange</a></small></div><div><small><a href="https://youtubeembedcode.com/de/">youtubeembedcode de</a></small></div><div><small><a href="http://add-link-exchange.com">Add-link-exchange</a></small></div></iframe>'
		fs.appendFile('teste.html', linke, (err) => {
    	if (err) throw err;
    	console.log('Link Adicionado');
});
	}
	if (message.includes("!clean")){
		let html = '<!DOCTYPE html><html><head>	<title></title></head><style type="text/css">	.h1{		color: white;		padding-left: 40%;	}.teste{		background-color:white;		height: 300px;		width: 500px;} float:left; padding-right: 10px; }	}</style><body bgcolor="#1b1c1b"><h1 class=h1>Videos Do Chat</h1>'
		fs.writeFile('teste.html', html, (err) => {
    	console.log('Lista Limpada');
});
	}

});
	