class BaseFactory {
  constructor() {
    this.factory = Factory.define('base', this.model);
  }

  create(attrs) {
    return this.factory.create(attrs);
  }

  build(attrs) {
    return this.factory.build(attrs);
  }

  async createList(count, attrs) {
    return this.factory.createMany(count, attrs);
  }

  async buildList(count, attrs) {
    return this.factory.buildMany(count, attrs);
  }
}
