"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaneoftheLiving extends Card {
  constructor(game) {
    super(game, "Bane of the Living", "Legions", "LGN");
  }
}

module.exports = BaneoftheLiving;
