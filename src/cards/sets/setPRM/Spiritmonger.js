"use strict";
const Constants = require ("../../../Constants");
const SpiritmongerBase = require("../setIMA/Spiritmonger");

class Spiritmonger extends SpiritmongerBase {
  constructor (game) {
    super(game, "Spiritmonger", "Magic Online Promos", "PRM");
  }
}

module.exports = Spiritmonger;
