"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadWarlock extends Card {
  constructor(game) {
    super(game, "Dread Warlock", "Magic 2010", "M10");
  }
}

module.exports = DreadWarlock;
