import React , { useState , useEffect } from 'react';
import { Row , Col , List, Avatar } from 'antd';
import { getResourceGroupTemplate } from '../actions/azure';
import RG from '../images/rg.png';
import { useHistory , useParams } from "react-router-dom";
import JSONPretty from 'react-json-pretty';
const ResourceGroupTemplateView = ()=>{
	const [ template , setTemplate ] = useState({});
	let history = useHistory();
	let { resourceGroup } = useParams();
	async function updateFrame(){
		
		let _template = await getResourceGroupTemplate(resourceGroup);
		console.info({ _template });
		setTemplate(_template);
	}
	
	useEffect(()=>{
		updateFrame();
		
	} , [])
	
	
	return (
		<div>
			<JSONPretty id="json-pretty" data={template}></JSONPretty>
		</div>
	)
}

export default ResourceGroupTemplateView ; 