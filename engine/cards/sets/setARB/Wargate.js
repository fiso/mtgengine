"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wargate extends Card {
  constructor(game) {
    super(game, "Wargate", "Alara Reborn", "ARB");
  }
}

module.exports = Wargate;
