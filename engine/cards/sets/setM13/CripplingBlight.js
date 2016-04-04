"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CripplingBlight extends Card {
  constructor(game) {
    super(game, "Crippling Blight", "Magic 2013", "M13");
  }
}

module.exports = CripplingBlight;
