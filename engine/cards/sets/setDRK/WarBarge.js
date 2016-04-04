"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarBarge extends Card {
  constructor(game) {
    super(game, "War Barge", "The Dark", "DRK");
  }
}

module.exports = WarBarge;
