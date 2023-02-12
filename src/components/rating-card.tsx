import { useState } from "react";
import styles from "./rating-card.module.css";

export default function RatingCard() {
  const [rating, setRating] = useState<number>();
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  function handleSetRating(rating: number) {
    setRating(rating);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating) {
      setIsSubmited(true);
    }
  }

  if (isSubmited) {
    return (
      <div className={styles.card} style={{ alignItems: "center" }}>
        <img src='/illustration-thank-you.svg' alt='cellphone' />
        <div className={styles.pill}>
          <p>You selected {rating} out of 5</p>
        </div>
        <div className={styles.textCenter}>
          <h1 className={styles.title}>Thank you!</h1>
          <p className={styles.description}>
            We apprecieted you taking the time to give rating. If you need more
            support, dont hesitate to get in touch!
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div>
        <img className={styles.star} src='/icon-star.svg' alt='start' />
      </div>

      <div className={styles.text}>
        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className={styles.buttonGroup}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type='button'
            className={styles.ratingButton}
            onClick={() => handleSetRating(rating)}
          >
            {rating}
          </button>
        ))}
      </div>

      <button className={styles.submit}>submit</button>
    </form>
  );
}
