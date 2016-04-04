"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Island extends Card {
  constructor(game) {
    super(game, "Island", "Archenemy", "ARC");
  }
}

module.exports = Island;
