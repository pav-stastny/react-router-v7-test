import type { Route } from './+types/home';

export function meta(obj: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	];
}

// export function loader({ context }: Route.LoaderArgs) {
// 	return { message: context.VALUE_FROM_NETLIFY };
// }

export default function Home({ loaderData }: Route.ComponentProps) {
	return <>Hello world</>;
}
