import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { TProduct } from '~/interfaces/TProduct';

const Productdetail = () => {
	const { id } = useParams();
	const [product, setProducts] = useState<TProduct | null>(null);

	useEffect(() => {
		fetch(`http://localhost:3000/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
	}, [id]);
	return (
		<div>
			<Container>
				<Image src={product?.thumbnail} />
				<h5>{product?.title}</h5>
				<p style={{ color: 'red' }}>{product?.price}$</p>
				<p>{product?.description}</p>
			</Container>
		</div>
	);
};

export default Productdetail;
