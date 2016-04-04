"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MireBlight extends Card {
  constructor(game) {
    super(game, "Mire Blight", "Zendikar", "ZEN");
  }
}

module.exports = MireBlight;
