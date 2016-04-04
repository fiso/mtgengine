"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoffinPuppets extends Card {
  constructor(game) {
    super(game, "Coffin Puppets", "Prophecy", "PCY");
  }
}

module.exports = CoffinPuppets;
