"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SludgeStriderBase = require("../setCON/SludgeStrider.js");

class SludgeStrider extends SludgeStriderBase {
  constructor(game) {
    super(game, "Sludge Strider", "Planechase", "HOP");
  }
}

module.exports = SludgeStrider;
