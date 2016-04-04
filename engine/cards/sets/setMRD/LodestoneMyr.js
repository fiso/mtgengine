"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LodestoneMyr extends Card {
  constructor(game) {
    super(game, "Lodestone Myr", "Mirrodin", "MRD");
  }
}

module.exports = LodestoneMyr;
