"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreechingSilcaw extends Card {
  constructor(game) {
    super(game, "Screeching Silcaw", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ScreechingSilcaw;
