"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScouringSands extends Card {
  constructor(game) {
    super(game, "Scouring Sands", "Born of the Gods", "BNG");
  }
}

module.exports = ScouringSands;
