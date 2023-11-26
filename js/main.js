let condensedExperience = false

const toggleExperience = (_event) => {
  condensedExperience = !condensedExperience
  const display = condensedExperience ? 'none' : 'list-item'

  document.querySelectorAll('.expanded-description').forEach(node => {
    node.style.display = display
  })
}

const backToTop = (_event) => {
  document.querySelector('header').scrollIntoView({ behavior: 'smooth' })
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('button.control').addEventListener('click', toggleExperience)
  document.querySelector('.back-to-top').addEventListener('click', backToTop)
})
