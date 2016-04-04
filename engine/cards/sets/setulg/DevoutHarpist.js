"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevoutHarpist extends Card {
  constructor(game) {
    super(game, "Devout Harpist", "Urza's Legacy", "ULG");
  }
}

module.exports = DevoutHarpist;
