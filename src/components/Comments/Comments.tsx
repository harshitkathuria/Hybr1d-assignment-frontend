import React from "react";
import moment from "moment";
import styles from "./Comments.module.scss";

const Comments = (props: any) => {
  const { comments } = props;

  return (
    <div>
      {comments?.map((comment: any) => (
        <div className={styles.comment_wrapper} key={comment.id}>
          <div>
            <div dangerouslySetInnerHTML={{ __html: comment.text || "" }} />
            <p className={styles.comment_details}>
              <p>
                <span>
                  {moment(comment?.created_at!).format("DD MMM, YYYY")}
                </span>
              </p>
            </p>
          </div>
          {comment.children?.length! > 0 ? (
            <Comments comments={comment.children} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Comments;
