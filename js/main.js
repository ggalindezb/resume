let summaryMode = false

const toggleSummaryMode = (_event) => {
  summaryMode = !summaryMode
  toggleExperience()
  toggleSkills()
}

const toggleExperience = () => {
  const display = summaryMode ? 'none' : 'list-item'

  document.querySelectorAll('.expanded-description').forEach(node => {
    node.style.display = display
  })
}

const toggleSkills = () => {
  const mainDisplay = summaryMode ? 'none' : 'block'
  const summaryDisplay = summaryMode ? 'block' : 'none'

  document.querySelector('#skills-main').style.display = mainDisplay
  document.querySelector('#skills-summary').style.display = summaryDisplay
}

const backToTop = (_event) => {
  document.querySelector('header').scrollIntoView({ behavior: 'smooth' })
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('button.control').addEventListener('click', toggleSummaryMode)
  document.querySelector('.back-to-top').addEventListener('click', backToTop)
})
