const { Service } = require("feathers-mongodb");

exports.Contacts = class Contacts extends Service {
  constructor(options, app) {
    super(options);

    app.get("mongoClient").then((db) => {
      this.Model = db.collection("contacts");
    });
  }
};
