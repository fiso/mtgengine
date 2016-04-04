"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravePeril extends Card {
  constructor(game) {
    super(game, "Grave Peril", "Commander 2015", "C15");
  }
}

module.exports = GravePeril;
