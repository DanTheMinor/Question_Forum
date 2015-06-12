Forum.Answer = DS.Model.extend({
  answer_body: DS.attr(),
  question: DS.belongsTo('question', {async: true})
})
