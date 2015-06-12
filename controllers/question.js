Forum.QuestionController = Ember.ObjectController.extend({
  isEditingQuestion: false,
  actions: {
    delete: function() {
      //if (confirm('Are you sure you want to delete this question?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      //}
    },
    edit: function() {
      this.set('isEditingQuestion', true);
    },
    save: function() {
      this.set('isEditingQuestion', false);
      this.get('model').save();
    }
  }
});
