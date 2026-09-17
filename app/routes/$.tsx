import {redirect} from 'react-router';
import type {Route} from './+types/$';

export async function loader({request}: Route.LoaderArgs) {
  const pathname = new URL(request.url).pathname;
  if (['/cart', '/account', '/checkout'].some((p) => pathname.startsWith(p))) {
    return redirect('/');
  }

  throw new Response(`${pathname} not found`, {
    status: 404,
  });
}

export default function CatchAllPage() {
  return null;
}
