class Task {
  constructor(){}
  async getTaskList(ctx) {
    return [{
      id:1,
      name: 's'
    }]
  }

  postTask(ctx) {

  }
}

module.exports = new Task();
