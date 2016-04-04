"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbunaAcolyte extends Card {
  constructor(game) {
    super(game, "Abuna Acolyte", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AbunaAcolyte;
