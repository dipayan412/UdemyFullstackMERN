const passport = require('passport')

module.exports = (app) => {
  var port = 'http://localhost:3000'
  if (process.env.NODE_ENV === 'production') {
    port = ''
  }
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  // http://localhost:3000
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    // res.send(req.user)
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session)
    res.send(req.user)
  })
}
