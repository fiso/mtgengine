"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chromanticore extends Card {
  constructor(game) {
    super(game, "Chromanticore", "Born of the Gods", "BNG");
  }
}

module.exports = Chromanticore;
