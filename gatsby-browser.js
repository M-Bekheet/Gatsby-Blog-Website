const scrollToElement = require('scroll-to-element')

exports.onRouteUpdate = ({ location }) => {

  //stop default browser quick loading
  exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
  }) => {
    const currentPosition = getSavedScrollPosition(location)
    window.scrollTo(...(currentPosition || [0, 0]))
    return false
  }

  scrollSmoothly(location)
}

const scrollSmoothly = location => {
  let hash = location.hash;
  if (hash) {
    scrollToElement(hash, {
      offset: -90,
      duration: 1000,
    })
  }
}

