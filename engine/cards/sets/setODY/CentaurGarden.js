"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurGarden extends Card {
  constructor(game) {
    super(game, "Centaur Garden", "Odyssey", "ODY");
  }
}

module.exports = CentaurGarden;
