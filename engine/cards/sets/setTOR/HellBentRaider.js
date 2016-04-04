"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellBentRaider extends Card {
  constructor(game) {
    super(game, "Hell-Bent Raider", "Torment", "TOR");
  }
}

module.exports = HellBentRaider;
