Forum.EditAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      //debugger
      var question = this.get('controllers.question.model');
      question.save();
      answer_body = this.get('answer_body');
      this.transitionToRoute('questions'); //return home for now
      //````````````````````````````````````````````
      // var newAnswer = this.store.createRecord('answer', {
      //   answer_body: this.get('answer_body')
      // });
      // newAnswer.save();
      //
      // var question = this.get('controllers.question.model');
      // question.get('answers').pushObject(newAnswer);
      // question.save();
      //
      // // For clearing the form
      // //this.set('answer_body', '');
      //
      //
      // //For routing back to the question that the answer belongs to
      // id = this.get('model.id')
      // this.transitionToRoute('/questions/' + id);
      //````````````````````````````````````````````
    },
    delete: function() {
      id = this.get('question.id');
      this.get('model').destroyRecord();
      this.transitionToRoute('questions'); //return home for now
    }
  }
})
