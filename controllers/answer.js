Forum.AnswerController = Ember.Controller.extend({ //maybe object controller?
  needs: ['question'],
  actions: {
    save: function() {
      //debugger
      var question = this.get('controllers.question.model');
      answer_model = this.get('model');
      answer_model.set('answer_body', this.get('answer_body'));
      answer_model.save();
      //question.save();
      this.transitionToRoute('/questions/' + question.id); //return home for now
    },
    delete: function() {
      var question = this.get('controllers.question.model');
      this.get('model').destroyRecord();
      this.transitionToRoute('/questions/' + question.id); //return home for now
    }
  }
})
