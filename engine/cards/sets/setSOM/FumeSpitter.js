"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FumeSpitter extends Card {
  constructor(game) {
    super(game, "Fume Spitter", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FumeSpitter;
