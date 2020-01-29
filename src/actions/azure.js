
import axios from 'axios';
const domain = process.env.REACT_APP_DOMAIN ;

console.info({ domain });

export async function getResourceGroupList(){
	const endpoint = `${domain}/resourceGroup` ; 
	return (await axios.get(endpoint) ).data ; 
	
}

export async function getResourceGroupTemplate(resourceGroup){
	const endpoint = `${domain}/resourceGroup/${resourceGroup}/template` ; 
	return (await axios.get(endpoint) ).data ; 
	
}