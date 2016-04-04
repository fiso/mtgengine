"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BakisCurse extends Card {
  constructor(game) {
    super(game, "Baki's Curse", "Homelands", "HML");
  }
}

module.exports = BakisCurse;
