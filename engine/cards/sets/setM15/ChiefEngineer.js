"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChiefEngineer extends Card {
  constructor(game) {
    super(game, "Chief Engineer", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ChiefEngineer;
