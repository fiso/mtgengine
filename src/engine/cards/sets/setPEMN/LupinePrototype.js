"use strict";
const Constants = require ("../../../Constants");
const LupinePrototypeBase = require("../setEMN/LupinePrototype");

class LupinePrototype extends LupinePrototypeBase {
  constructor (game) {
    super(game, "Lupine Prototype", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = LupinePrototype;
