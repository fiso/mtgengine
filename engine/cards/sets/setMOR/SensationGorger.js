"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SensationGorger extends Card {
  constructor(game) {
    super(game, "Sensation Gorger", "Morningtide", "MOR");
  }
}

module.exports = SensationGorger;
