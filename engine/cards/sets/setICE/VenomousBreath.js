"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenomousBreath extends Card {
  constructor(game) {
    super(game, "Venomous Breath", "Ice Age", "ICE");
  }
}

module.exports = VenomousBreath;
