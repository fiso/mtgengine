"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OwlFamiliar extends Card {
  constructor(game) {
    super(game, "Owl Familiar", "Masters Edition IV", "ME4");
  }
}

module.exports = OwlFamiliar;
