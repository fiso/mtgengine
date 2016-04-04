"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObstinateFamiliar extends Card {
  constructor(game) {
    super(game, "Obstinate Familiar", "Odyssey", "ODY");
  }
}

module.exports = ObstinateFamiliar;
