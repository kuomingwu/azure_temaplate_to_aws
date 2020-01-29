require('dotenv').config()
import express from 'express'
import cors from 'cors'
import path from 'path';
import bodyParser  from 'body-parser';
import helmet from 'helmet';

import * as azure from './module/azure';

require('express-group-routes');
const session = require('express-session');
const app = express();
app.use(express.static('src'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
if(process.env.DEBUG_MODE == 'true'){
	app.use(cors());
}else{
	
	app.use(helmet());
}
app.set('trust proxy', 1) // trust first proxy



app.group('/api/v1' , (router)=>{
	
	router.get('/resourceGroup' , async(req , res , next)=>{
		//get resource list
		let list = await azure.getResourceGroupList();
		res.send(list) ; 
		
	})
	router.get('/resourceGroup/:resourceGroup/template' , async(req , res , next)=>{
		//get resource list
		const { resourceGroup } = req.params ; 
		let template = await azure.getRGtemplate(resourceGroup);
		res.send(template) ; 
		
	})
	
})

app.group('/' , (router)=>{
	
	router.get('*' , (req , res , next)=>{
		
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
		
	})
	
})

app.listen(process.env.SERVER_PORT, function () {
	console.log(`Example app listening on port ${process.env.SERVER_PORT}!`);
});