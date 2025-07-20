export const store = {
  '4dd4c49aef34e20af52efb50a1d0ebb0b8062b6d':
    'query FindAuthorQuery($id: Int!) { __typename author: user(id: $id) { __typename email fullName } }',
  '46e9823d95110ebb2ef17ef82fff5c19a468f8a6':
    'query FindBlogPostQuery($id: Int!) { __typename blogPost: post(id: $id) { __typename author { __typename email fullName } body createdAt id title } }',
  '421bcffdde84d448ec1a1b30b36eaeb966f00257':
    'query BlogPostsQuery { __typename blogPosts: posts { __typename author { __typename email fullName } body createdAt id title } }',
  f6ae606548009c2cd4c69b9aecebad0a730ba23d:
    'mutation DeleteContactMutation($id: Int!) { __typename deleteContact(id: $id) { __typename id } }',
  f7d2df28fcf87b0c29d225df79363d1c69159916:
    'query FindContactById($id: Int!) { __typename contact: contact(id: $id) { __typename createdAt email id message name } }',
  '7af93a7e454d9c59bbb77c14e0c78e99207fd0c6':
    'query FindContacts { __typename contacts { __typename createdAt email id message name } }',
  e01ad8e899ac908458eac2d1f989b88160a0494b:
    'query EditContactById($id: Int!) { __typename contact: contact(id: $id) { __typename createdAt email id message name } }',
  '94f51784b918a52e9af64f3c1fd4356903b611f8':
    'mutation UpdateContactMutation($id: Int!, $input: UpdateContactInput!) { __typename updateContact(id: $id, input: $input) { __typename createdAt email id message name } }',
  da35778949e1e8e27b7d1bb6b2a630749c5d7060:
    'mutation CreateContactMutation($input: CreateContactInput!) { __typename createContact(input: $input) { __typename id } }',
  '4f880f909a16b7fe15898fe33a2ee26933466719':
    'query EditPostById($id: Int!) { __typename post: post(id: $id) { __typename authorId body createdAt id title } }',
  '32b9225df81ff7845fedfa6d5c86c5d4a76073d2':
    'mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) { __typename updatePost(id: $id, input: $input) { __typename authorId body createdAt id title } }',
  daf229dcea085f1beff91102a63c2ba9c88e8481:
    'mutation CreatePostMutation($input: CreatePostInput!) { __typename createPost(input: $input) { __typename id } }',
  e3405f6dcb6460943dd604423f0f517bc8318aaa:
    'mutation DeletePostMutation($id: Int!) { __typename deletePost(id: $id) { __typename id } }',
  '43a94ad9a150aa7a7a665c73a931a5b18b6cc28b':
    'query FindPostById($id: Int!) { __typename post: post(id: $id) { __typename authorId body createdAt id title } }',
  '76308e971322b1ece4cdff75185bb61d7139e343':
    'query FindPosts { __typename posts { __typename authorId body createdAt id title } }',
  '2f2487bd6a7c61ff1a0bc8fd1893e410263544e4':
    'query FindWaterfallBlogPostQuery($id: Int!) { __typename waterfallBlogPost: post(id: $id) { __typename authorId body createdAt id title } }',
}
