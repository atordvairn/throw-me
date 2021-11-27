import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Input } from "@chakra-ui/react"
import Script from 'next/script'
import React from 'react'

export default function Home() {
handleChange = event => { 
    this.setState({ 
      subject: event.target.value 
    })
  } 

function init(){
 fetch("/api/create/jdienzn=yes")
}

React.useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>ThrowMeTo- A hassle free url shortner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/jQuery.js" />
      <Script src="/script.js" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Throw-Me-To
          <div style={{ fontSize: '1rem' }}>
            ( it&apos;s a url shortner )
          </div>
        </h1>
        <p className={styles.description}>
          don&apos;t worry we&apos;ll throw you well.
        </p>
        <div className={styles.input_cont}>
          <Input placeholder="enter your looong url" id='url' onChange={this.handleChange} />
          <Input placeholder="my url name" id='name' style={{ width: '200px' }} />
        </div>
        <div className={styles.button_doiIt}>
          <Button id="button" onClick={init} colorScheme="teal" rightIcon={<ArrowForwardIcon />} style={{ margin: "5px" }}>
            Do It! {this.state.subject}
          </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          (c) volcareso
        </span>
      </footer>
    </div>
  )
}
