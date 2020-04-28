import * as React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const Shop = () => {
	const [ collections, _setCollections ] = React.useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default Shop;
