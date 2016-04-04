"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessImp extends Card {
  constructor(game) {
    super(game, "Reckless Imp", "Dragons of Tarkir", "DTK");
  }
}

module.exports = RecklessImp;
