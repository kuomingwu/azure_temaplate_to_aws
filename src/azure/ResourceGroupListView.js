import React , { useState , useEffect } from 'react';
import { Row , Col , List, Avatar } from 'antd';
import { getResourceGroupList } from '../actions/azure';
import RG from '../images/rg.png';
import { useHistory } from "react-router-dom";

const ResourceGroupListView = ()=>{
	const [ rgs , setRgs ] = useState([]);
	let history = useHistory();
	async function updateFrame(){
		
		let list = await getResourceGroupList();
		console.info({ list });
		setRgs(list);
	}
	
	useEffect(()=>{
		updateFrame();
		
	} , [])
	
	
	return (
		<List
			itemLayout="horizontal"
			dataSource={rgs}
			renderItem={item => (
			  <List.Item>
				<List.Item.Meta
					style={{ cursor:'pointer' }}
					avatar={<Avatar src={RG} />}
					title={<div>{item.location}</div>}
					description={item.name}
					onClick={()=>history.push(`/resourceGroup/${item.name}/template`)}
				/>
			  </List.Item>
			)}
		  />
	
	)
}

export default ResourceGroupListView ; 