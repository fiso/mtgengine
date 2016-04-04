"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerramorphicExpanse extends Card {
  constructor(game) {
    super(game, "Terramorphic Expanse", "Archenemy", "ARC");
  }
}

module.exports = TerramorphicExpanse;
