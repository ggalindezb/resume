let condensedExperience = false

const toggleExperience = (_event) => {
  condensedExperience = !condensedExperience
  const display = condensedExperience ? 'none' : 'block'

  document.querySelectorAll('.expanded-description').forEach(node => {
    node.style.display = display
  })
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('button.control').addEventListener('click', toggleExperience)
})
