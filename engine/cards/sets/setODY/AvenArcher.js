"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenArcher extends Card {
  constructor(game) {
    super(game, "Aven Archer", "Odyssey", "ODY");
  }
}

module.exports = AvenArcher;
