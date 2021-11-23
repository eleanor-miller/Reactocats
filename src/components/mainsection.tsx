import React from 'react'
import { Article } from './article'

export function MainSection() {
  return (
    <main>
      <section>
        <Article
          name="Terracottocat"
          img="https://octodex.github.com//images/Terracottocat_Single.png"
          number="149"
        />
        <Article
          name="Octogatos"
          img="https://octodex.github.com//images/Octogatos.png"
          number="148"
        />
        <Article
          name="Sentrytocat"
          img="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
          number="143"
        />
        <Article
          name="Boxertocat"
          img="https://octodex.github.com//images/boxertocat_octodex.jpg"
          number="141"
        />
        <Article
          name="Surftocat"
          img="https://octodex.github.com//images/surftocat.png"
          number="140"
        />
        <Article
          name="Scubatocat"
          img="https://octodex.github.com//images/scubatocat.png"
          number="138"
        />
        <Article
          name="Dinotocat"
          img="https://octodex.github.com//images/dinotocat.png"
          number="130"
        />
        <Article
          name="Spidertocat"
          img="https://octodex.github.com//images/spidertocat.png"
          number="88"
        />
      </section>
    </main>
  )
}
