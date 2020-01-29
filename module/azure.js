require('dotenv').config()
import msRestAzure from 'ms-rest-azure';
const ResourceManagementClient = require('azure-arm-resource').ResourceManagementClient;

const {
	CLIENT_ID ,
	SECRET ,
	DOMAIN  ,
	SUBSCRIPTION_ID
} = process.env ; 

const clientId = CLIENT_ID ; 
const secret = SECRET ; 
const domain = DOMAIN ; 
const subscriptionId =SUBSCRIPTION_ID ; 

export async function getResourceGroupList(){
	
	let credentials = await getPrincipalSecret();
	const resourceClient = new ResourceManagementClient(credentials, subscriptionId);
	return await resourceClient.resourceGroups.list();
}

export async function getRGtemplate(resourceGroupName){
	let credentials = await getPrincipalSecret();
	const resourceClient = new ResourceManagementClient(credentials, subscriptionId);
	
	const rgParameter = {
		resources: ['*']
	};
 
	return await resourceClient.resourceGroups.exportTemplate(resourceGroupName, rgParameter);
	
}

export async function getPrincipalSecret(){
	
	return await msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain);

	
}