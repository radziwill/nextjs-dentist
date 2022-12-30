import Head from 'next/head'
import Image from 'next/image'
import styles from './toolbar.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Button from "../button/button";

export default function Toolbar() {
  return (
    <div className={styles.container}>
      <Button>Text</Button>
    </div>
  )
}
