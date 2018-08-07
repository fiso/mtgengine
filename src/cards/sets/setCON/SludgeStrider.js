"use strict";
const Constants = require ("../../../Constants");
const SludgeStriderBase = require("../setHOP/SludgeStrider");

class SludgeStrider extends SludgeStriderBase {
  constructor (game) {
    super(game, "Sludge Strider", "Conflux", "CON");
  }
}

module.exports = SludgeStrider;
