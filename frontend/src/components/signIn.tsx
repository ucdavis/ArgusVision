import { signIn } from "@/auth";
import styles from "@/app/page.module.css";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("cas");
      }}
    >
      <button 
        type="submit" 
        className={styles.actionButton}
        style={{
          background: 'linear-gradient(135deg, #2563eb, #6366f1)',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.75rem 2rem',
          color: 'white',
          fontWeight: '600',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.2s',
          minWidth: '140px'
        }}
      >
        Get Started
      </button>
    </form>
  );
}

// Export both as default and named export
export default SignIn;
export { SignIn };
