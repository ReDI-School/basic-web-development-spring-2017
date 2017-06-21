document.addEventListener("DOMContentLoaded", function() {

  var sections = document.getElementsByTagName('section')
  var steps = {}

  // Add numbered ids to sections
  for(var i = 0; i < sections.length; i++) {
    var anchor = sections[i].id = 'slide-' + (i + 1)
    steps[anchor].push({
      anchor: anchor
    })
    var substeps = sections[i].getElementsByClassName('step')
    for(var l = 0; l < substeps.length; l++) {
      steps.push({
        anchor: anchor + '-' + (l + 1)
      })
    }
  }
  console.log(steps)

  var changeAnchorBy = function(by) {
    var currentIndex = steps.indexOf(window.location.hash.slice(1))
    if (currentIndex < 0) { currentIndex = 1 }
    var nextIndex = currentIndex + by
    if (nextIndex < 0) { nextIndex = 0 }
    if (nextIndex > steps.length - 1) { nextIndex = steps.length - 1 }
    window.location.hash = "#" + steps[nextIndex]
  }

  document.onkeypress = function(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return
    }

    if (event.key == 'ArrowLeft') {
      changeAnchorBy(-1)
    }
    if (event.key == 'ArrowRight') {
      changeAnchorBy(1)
    }
  }
})
