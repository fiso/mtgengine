"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EyeGouge extends Card {
  constructor(game) {
    super(game, "Eye Gouge", "Born of the Gods", "BNG");
  }
}

module.exports = EyeGouge;
