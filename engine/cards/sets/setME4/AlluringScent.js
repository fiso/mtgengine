"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlluringScent extends Card {
  constructor(game) {
    super(game, "Alluring Scent", "Masters Edition IV", "ME4");
  }
}

module.exports = AlluringScent;
