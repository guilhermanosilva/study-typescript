const fetchUrl = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  console.log('==>', response);
  let body = await response.json();
  return body as Post[];
}

async function showPosts() {
  let posts = await fetchPosts(fetchUrl);
  let post = posts[0];
  console.log('Post #' + post.id);
  console.log(
    'Author: ' + (post.userId === 1 ? 'Administrador' : post.userId.toString()),
  );
  console.log('Title: ' + post.title);
  console.log('Body: ' + post.body);
}

showPosts();
