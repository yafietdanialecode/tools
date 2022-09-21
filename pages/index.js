import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
export default function Home() {




  return (
    <div>

<div className='box'>
<h1>code editor</h1>
<Link href='/tools/code-editor'>
<a><button>start</button></a>
</Link>


<details>
  <summary>what?</summary>
<p>simple code editor for HTML & CSS</p>
</details>

</div>


<div className='box'>
<h1>docs</h1>
<button>start</button>
<details>
  <summary>what?</summary>
</details>
</div>


<div className='box'>
<h1>color</h1>
<button>start</button>
<details>
  <summary>what?</summary>
  <p>it includes color picking tools</p>
</details>
</div>


<div className='box'>
<h1>code editor</h1>
<button>start</button>
<details>
  <summary>what?</summary>
</details>
</div>

    </div>
  )
}
