import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
	BrowserRouter as Router ,
	Route ,
	Switch
} from 'react-router-dom';
import ResourceGroupListView from './azure/ResourceGroupListView';
import ResourceGroupTemplateView from './azure/ResourceGroupTemplateView';
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout className="layout">
			<Header>
			  <div className="logo" />
			  <Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				style={{ lineHeight: '64px' }}
			  >
				
			  </Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
			  
				<div style={{ background: '#fff', padding: 24, minHeight: '70vh' }}>
					<Router>
						<Route exact path={`/`} component={ResourceGroupListView} />
						<Route exact path={`/resourceGroup/:resourceGroup/template`} component={ResourceGroupTemplateView} />
					</Router>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ian Design ©2020 Created by Ian</Footer>
		  </Layout>
	);
}

export default App;
