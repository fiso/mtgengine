"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatinumEmperion extends Card {
  constructor(game) {
    super(game, "Platinum Emperion", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PlatinumEmperion;
