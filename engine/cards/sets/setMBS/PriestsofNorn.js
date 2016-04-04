"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PriestsofNorn extends Card {
  constructor(game) {
    super(game, "Priests of Norn", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PriestsofNorn;
