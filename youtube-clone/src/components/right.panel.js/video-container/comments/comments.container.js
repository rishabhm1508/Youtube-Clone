import { Comment } from "./comment";

export const CommentsContainer = () => {
  const comments = [
    {
      name: "Alice",
      text: "This is the first comment...",
      id: "1",
      replies: [
        {
          name: "Bob",
          text: "Replying to Alice...",
          id: "23",
          replies: [
            {
              name: "Charlie",
              text: "Replying to Bob.",
              id: "3",
              replies: [],
            },
            {
              name: "David",
              text: "Replying to Bob.",
              id: "4",
              replies: [],
            },
          ],
        },
        {
          name: "David",
          text: "Another reply to Alice.",
          id: "5",
          replies: [],
        },
      ],
    },
    {
      name: "Eve",
      text: "This is another comment.",
      id: "6",
      replies: [
        {
          name: "Frank",
          text: "Replying to Eve.",
          id: "7",
          replies: [],
        },
      ],
    },
  ];

  const generateComment = (comment) => {
    {
      return comment.replies.length ? (
        <>
          <Comment comment={comment} />
          {comment.replies.map((reply) => {
            return (
              <div
                key={`${reply.id}_${reply.text}_${reply.replies.length}`}
                className="ml-10 border-l-black-100 border-l-2 pl-2"
              >
                {generateComment(reply)}
              </div>
            );
          })}
        </>
      ) : (
        <Comment
          key={`${comment.name}_${comment.replies.length}`}
          comment={comment}
        />
      );
    }
  };

  return (
    <div className="mt-9">
      <h2 className="font-bold size-9">Comments</h2>
      {comments.map((comment) => {
        return (
          <div key={`${comment.text}_${comment.id}_${comment.replies.length}`}>
            {generateComment(comment)}
          </div>
        );
      })}
    </div>
  );
};
