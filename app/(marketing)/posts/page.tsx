
'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import utilStyles from './utils.module.css'
export default function post() {
    const router= useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.center}> 
        <h1>Post</h1>
           </div>
           {/* <button type="button" onClick={()=> router.push('/')}>Back to home</button> */}
           <Link href="/">Back to home</Link>
           </main>
  )
}
