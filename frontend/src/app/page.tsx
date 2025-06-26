import styles from "./page.module.css";
import { auth } from "@/auth";
import { SignIn } from "@/components/signIn";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.hero}>
            <div className={styles.logoContainer}>
              <div className={styles.argusLogo}>
                <div className={styles.eye}>
                  <div className={styles.iris}></div>
                </div>
                <span className={styles.logoText}>ArgusVision</span>
              </div>
            </div>
            <h1 className={styles.title}>
              The Future of <span className={styles.gradient}>AI Vision</span>
            </h1>
            <p className={styles.description}>
              Harness the power of advanced computer vision and artificial intelligence 
              to unlock new possibilities in visual data processing and analysis.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔍</div>
                <h3>Advanced Detection</h3>
                <p>State-of-the-art object detection and recognition capabilities</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Real-time Processing</h3>
                <p>Lightning-fast analysis for time-critical applications</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>Precision Analytics</h3>
                <p>Detailed insights and accurate measurements from visual data</p>
              </div>
            </div>
            <div className={styles.ctas}>
              <SignIn />
              <a href="#learn-more" className={styles.secondary}>
                Learn More
              </a>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>© 2024 ArgusVision. Powered by next-generation AI technology.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.argusLogo}>
            <div className={styles.eye}>
              <div className={styles.iris}></div>
            </div>
            <span className={styles.logoText}>ArgusVision</span>
          </div>
        </div>
        <div className={styles.userInfo}>
          <span>Welcome, {session.user.name}</span>
          <div className={styles.userAvatar}>
            {session.user.name?.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>
      <main className={styles.dashboard}>
        <div className={styles.dashboardContent}>
          <h1>Vision Analytics Dashboard</h1>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>Active Models</h3>
              <div className={styles.statValue}>3</div>
              <p>Currently running</p>
            </div>
            <div className={styles.statCard}>
              <h3>Images Processed</h3>
              <div className={styles.statValue}>12.5K</div>
              <p>This month</p>
            </div>
            <div className={styles.statCard}>
              <h3>Accuracy Rate</h3>
              <div className={styles.statValue}>98.7%</div>
              <p>Average precision</p>
            </div>
            <div className={styles.statCard}>
              <h3>Processing Speed</h3>
              <div className={styles.statValue}>15ms</div>
              <p>Average response time</p>
            </div>
          </div>
          <div className={styles.quickActions}>
            <button className={styles.actionButton}>Upload Images</button>
            <button className={styles.actionButton}>Train Model</button>
            <button className={styles.actionButton}>View Analytics</button>
            <button className={styles.actionButton}>Export Results</button>
          </div>
        </div>
      </main>
    </div>
  );
}
