import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Toolbar from "../toolbar/toolbar";

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
        <Toolbar></Toolbar>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={styles.content}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/pages">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
