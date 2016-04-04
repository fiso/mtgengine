"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranLens extends Card {
  constructor(game) {
    super(game, "Thran Lens", "Urza's Legacy", "ULG");
  }
}

module.exports = ThranLens;
