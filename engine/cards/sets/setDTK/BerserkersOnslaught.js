"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BerserkersOnslaught extends Card {
  constructor(game) {
    super(game, "Berserkers' Onslaught", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BerserkersOnslaught;
