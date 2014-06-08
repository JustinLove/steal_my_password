(function() {
  var password = ko.observable('').extend({local: 'stealMyPassword'})
  model.showForget = ko.computed(function() {return password() != ''})
  model.pleaseDontStealMyPassword = function() {
    password('')
    ko.observable(1).extend({ session: 'start_mode' })(1)
    ko.observable('').extend({ session: 'displayName' })('')
    ko.observable('').extend({ session: 'uberId' })('')
    ko.observable().extend({ session: 'jabberToken' })('') // don't see how to log out
    ko.observable().extend({ session: 'signed_in_to_ubernet' })(false)
  }

  $("#servers>div").append('<div class="form-group" data-bind="visible: showForget">\
    <h3>STEAL MY PASSWORD</h3>\
    <input type="button" value="FORGET PASSWORD" class="btn_std btn_toolbar" data-bind="click: pleaseDontStealMyPassword, click_sound: \'default\', rollover_sound: \'default\'" />\
    </div>')
})()
