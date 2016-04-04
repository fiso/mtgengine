"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SludgeStrider extends Card {
  constructor(game) {
    super(game, "Sludge Strider", "Conflux", "CON");
  }
}

module.exports = SludgeStrider;
