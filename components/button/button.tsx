import Head from 'next/head'
import Image from 'next/image'
import styles from './button.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Button({children}:{children: React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
