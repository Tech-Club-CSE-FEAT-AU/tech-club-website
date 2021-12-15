import React from 'react';
import { List } from 'antd';


export default function Porfolio(props){

		let propsData = props.Data;

		const listData = [];
		for (let i = 0; i < propsData.PastPortfolio.length; i++) {
			listData.push({
				href: `${propsData.PastPortfolio[i].url}`,
				title: `${propsData.PastPortfolio[i].name}`,
				description: `${propsData.PastPortfolio[i].description}`,
				content: `${propsData.PastPortfolio[i].content}`,
				imgurl: `${propsData.PastPortfolio[i].imgurl}`,
			});
		}

		
		return (
			<section id="portfolio" style={{ background:'#fafffc' }}>
				<div className="row">
					<div className="twelve columns" >
						<h1>Past Work</h1>
							<List
								itemLayout="vertical"
								size="default"
								pagination={{
									onChange: (page) => {
											console.log(page);
									},
									pageSize: 3,
								}}
								dataSource={listData}
								renderItem={item => (
									<List.Item
										key={item.title}
										extra={<img id='newportfolio_' width={400} alt="logo" src={item.imgurl} />}
										style={{ textAlign: "justify" }}
									>
									<List.Item.Meta
										title={<a href={item.href}>{item.title}</a>}
										description={item.description}
									/>
										{item.content}
									</List.Item>
								)}
							/>
					</div>
				</div>
			</section>
		);

}
