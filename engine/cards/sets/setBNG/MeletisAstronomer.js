"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeletisAstronomer extends Card {
  constructor(game) {
    super(game, "Meletis Astronomer", "Born of the Gods", "BNG");
  }
}

module.exports = MeletisAstronomer;
