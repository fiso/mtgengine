"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Convolute extends Card {
  constructor(game) {
    super(game, "Convolute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Convolute;
