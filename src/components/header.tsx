import React from 'react'

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="45"
            height="45"
            alt="GithubLogo"
          />
        </a>
        <a href="#">Octodex</a>
        <a href="#">Home</a>
        <a href="https://octodex.github.com/faq/">FAQ</a>
      </nav>

      <nav className="socials">
        <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
        <a href="https://github.com/">Back to GitHub.com</a>
      </nav>
    </header>
  )
}
