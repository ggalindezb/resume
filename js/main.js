let summarizedExperience = false
let summarizedSkills = false
let atsMode = false

const toggleSummaryMode = (_event) => {
  summarizedExperience = !summarizedExperience
  summarizedSkills = atsMode ? true : !summarizedSkills
  toggleExperience()
  toggleSkills()
}

const toggleExperience = () => {
  const display = summarizedExperience ? 'none' : 'list-item'

  document.querySelectorAll('.expanded-description').forEach(node => {
    node.style.display = display
  })
}

const toggleSkills = () => {
  const mainDisplay = summarizedSkills ? 'none' : 'block'
  const summaryDisplay = summarizedSkills ? 'block' : 'none'

  document.querySelector('#skills-main').style.display = mainDisplay
  document.querySelector('#skills-summary').style.display = summaryDisplay
}

const toggleAts = () => {
  atsMode = !atsMode
  summarizedSkills = atsMode
  toggleSkills()

  if(atsMode) {
    document.querySelector('section#experience').classList.add('ats')
    document.querySelector('body').classList.add('ats')
  } else {
    document.querySelector('section#experience').classList.remove('ats')
    document.querySelector('body').classList.remove('ats')
  }
}

const printDocument = () => {
  window.print()
}

const backToTop = (_event) => {
  document.querySelector('header').scrollIntoView({ behavior: 'smooth' })
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('#toggle-summary').addEventListener('click', toggleSummaryMode)
  document.querySelector('#toggle-ats').addEventListener('click', toggleAts)
  document.querySelector('#print-document').addEventListener('click', printDocument)
  document.querySelector('.back-to-top').addEventListener('click', backToTop)
})
