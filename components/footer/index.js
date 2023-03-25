import Link from 'next/link'

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link
        href="https://github.com/ozanisgor"
        target="_blank"
      >
        Ozan Isgor
      </Link>
    </footer>
  )
}
export default Footer
