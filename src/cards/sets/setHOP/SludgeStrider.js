"use strict";
const Constants = require ("../../../Constants");
const SludgeStriderBase = require("../setCON/SludgeStrider");

class SludgeStrider extends SludgeStriderBase {
  constructor (game) {
    super(game, "Sludge Strider", "Planechase", "HOP");
  }
}

module.exports = SludgeStrider;
