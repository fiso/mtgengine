"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArkofBlight extends Card {
  constructor(game) {
    super(game, "Ark of Blight", "Scourge", "SCG");
  }
}

module.exports = ArkofBlight;
