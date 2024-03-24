import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TProduct } from '~/interfaces/TProduct';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Product = () => {
	const [products, setProducts] = useState<TProduct[]>([]);
	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
	}, []);
	return (
		<div>
			<Container>
				<h3>Danh sách sản phẩm</h3>
				<Row>
					{products.map((product) => (
						<Col>
							<Link to={`product/${product.id}`}>
								<Image
									width={300}
									height={300}
									src={product.thumbnail}
									rounded
								/>
								<h5>{product.title}</h5>
							</Link>
							<p style={{ color: 'red' }}>{product.price}$</p>
							<p>{product.description}</p>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Product;
