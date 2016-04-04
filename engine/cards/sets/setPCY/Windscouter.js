"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Windscouter extends Card {
  constructor(game) {
    super(game, "Windscouter", "Prophecy", "PCY");
  }
}

module.exports = Windscouter;
