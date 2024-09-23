import { commentsList } from "../../../../utils/constants";
import { Comment } from "./comment";

export const CommentsContainer = () => {
  const comments = [...commentsList];

  const generateComment = (comment) => {
    {
      return comment.replies.length ? (
        <>
          <Comment comment={comment} />
          {comment.replies.map((reply, index) => {
            return (
              <div
                key={`${reply.id}_${reply.text}_${reply.replies.length}_${index}`}
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
