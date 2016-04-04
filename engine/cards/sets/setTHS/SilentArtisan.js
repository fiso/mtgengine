"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentArtisan extends Card {
  constructor(game) {
    super(game, "Silent Artisan", "Theros", "THS");
  }
}

module.exports = SilentArtisan;
