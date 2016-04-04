"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reparations extends Card {
  constructor(game) {
    super(game, "Reparations", "Mirage", "MIR");
  }
}

module.exports = Reparations;
