Forum.Question = DS.Model.extend({
  author: DS.attr(),
  description: DS.attr(),
  body: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
})
