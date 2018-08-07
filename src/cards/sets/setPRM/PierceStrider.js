"use strict";
const Constants = require ("../../../Constants");
const PierceStriderBase = require("../setBBD/PierceStrider");

class PierceStrider extends PierceStriderBase {
  constructor (game) {
    super(game, "Pierce Strider", "Magic Online Promos", "PRM");
  }
}

module.exports = PierceStrider;
