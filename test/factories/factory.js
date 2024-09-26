export default class Factory {
  /**
   * Create a new factory.
   * 
   * @param {*} model The sequalize model to create instances of.
   * @param {*} attributes A function that returns an object with the attributes to use when creating an instance of the model.
   */
  constructor({ model, attributes, traits }) {
    this.model = model;
    this.modelName = model.name;

    this.traits = traits;
    this.attributes = attributes;
  }

  async create(overrides, options) {
    const attrs = this._buildAttributes(overrides, options);

    return await this.model.create(attrs);
  }

  async createList(count, overrides, options) {
    let records = [];

    for (let i = 0; i < count; i++) {
      records.push(this._buildAttributes(overrides, options));
    }

    return this.model.bulkCreate(records);
  }

  build(overrides, options) {
    const attrs = this._buildAttributes(overrides, options);

    return this.model.build(attrs);
  }

  buildList(count, overrides, options) {
    let records = [];

    for (let i = 0; i < count; i++) {
      records.push(this._buildAttributes(overrides, options));
    }

    return records;
  }

  _buildAttributes(overrides = {}, options = {}) {
    let mergeList = [{}, this.attributes(), overrides];

    if (options.traits) {
      options.traits.forEach(traitName => {
        let traitFn = this.traits[traitName];

        if (!traitFn) {
          throw new Error(`Trait ${traitName} not found in ${this.modelName} factory.`);
        }

        mergeList.push(traitFn());
      })
    };

    return Object.assign(...mergeList);
  }
}
