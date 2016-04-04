"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViashinoBey extends Card {
  constructor(game) {
    super(game, "Viashino Bey", "Urza's Legacy", "ULG");
  }
}

module.exports = ViashinoBey;
