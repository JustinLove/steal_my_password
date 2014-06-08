(function() {
  var key = 'a3chxSXbDRHxmd4t'
  model.password(atob(decode(localStorage[key]) || ''))
  model.password.subscribe(function(value) {
    localStorage[key] = encode(btoa(value))
  })

  model.readyToLogin.subscribe(function(ready) {
    if (ready && !model.showConnecting() && model.password() != '') {
      model.ubernetLoginIn();
    }
  })
})()
