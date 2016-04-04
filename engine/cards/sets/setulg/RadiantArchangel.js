"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RadiantArchangel extends Card {
  constructor(game) {
    super(game, "Radiant, Archangel", "Urza's Legacy", "ULG");
  }
}

module.exports = RadiantArchangel;
