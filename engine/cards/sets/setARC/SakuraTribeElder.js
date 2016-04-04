"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SakuraTribeElder extends Card {
  constructor(game) {
    super(game, "Sakura-Tribe Elder", "Archenemy", "ARC");
  }
}

module.exports = SakuraTribeElder;
