import { useNavigation } from "react-router-dom";

function SubmitBtn({ label }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        label || "submit"
      )}
    </button>
  );
}
export default SubmitBtn;
