export const Comment = ({ comment }) => {
  return (
    <div>
      <h3 className="font-bold">{comment.name}</h3>
      <p>{comment.text}</p>
    </div>
  );
};
