const initState = {
  posts: [
    { id: "1", title: "book", body: "I love reading books" },
    { id: "2", title: "music", body: "this kind of music is my taste" },
    { id: "3", title: "film", body: "what suckers!" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
