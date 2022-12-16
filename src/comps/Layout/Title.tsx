import React from 'react';

export default function Title(props) {
	return <h1 className="text-white uppercase title text-7xl mt-32 leading-[5rem]">{props.children}</h1>;
}
