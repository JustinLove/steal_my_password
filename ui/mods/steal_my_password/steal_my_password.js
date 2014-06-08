model.password = ko.observable('').extend({local: 'stealMyPassword'})

model.readyToLogin.subscribe(function(ready) {
  if (ready && !model.showConnecting() && model.password() != '') {
    model.ubernetLoginIn();
  }
})
