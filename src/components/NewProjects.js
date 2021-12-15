import React from 'react';
import { List } from 'antd';


export default function Porfolio(props){

		let propsData = props.Data;

		const listData = [];
		for (let i = 0; i < propsData.portfolio.length; i++) {
			listData.push({
				href: `${propsData.portfolio[i].url}`,
				title: `${propsData.portfolio[i].name}`,
				description: `${propsData.portfolio[i].description}`,
				content: `${propsData.portfolio[i].content}`,
				imgurl: `${propsData.portfolio[i].imgurl}`,
			});
		}

		return (
			<section id="portfolio" style={{ background: '#fafbff'}}>
				<div className="row">
					<div className="twelve columns" >
						<h1>Current Work</h1>
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
