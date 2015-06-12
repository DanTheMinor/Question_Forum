Forum.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        description: this.get('description'),
        body: this.get('body')
      });

      newQuestion.save();

      // For clearing the form
      this.set('author', '');
      this.set('description', '');
      this.set('body', '');

      this.transitionToRoute('questions');
    }
  }
})
