"use strict";
const Constants = require ("../../../Constants");
const UnsubstantiateBase = require("../setEMN/Unsubstantiate");

class Unsubstantiate extends UnsubstantiateBase {
  constructor (game) {
    super(game, "Unsubstantiate", "Magic Online Promos", "PRM");
  }
}

module.exports = Unsubstantiate;
