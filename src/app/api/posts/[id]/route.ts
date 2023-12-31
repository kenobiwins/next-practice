import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import posts from '../posts.json';

// const TEST_SECRET = process.env.SECRET also we can works with .env for hide our api key
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const foundedObj = posts.find((post: any) => post.id === id);

  return NextResponse.json({ data: foundedObj });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get('Content-Type');

  const cookiesList = cookies();
  const coo1 = cookiesList.get('Cookie_1')?.value;

  // redirect('/blog'); // redirect to page when post had deleted

  return NextResponse.json({ id });
}
