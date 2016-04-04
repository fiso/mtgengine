"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingPuncture extends Card {
  constructor(game) {
    super(game, "Wing Puncture", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WingPuncture;
