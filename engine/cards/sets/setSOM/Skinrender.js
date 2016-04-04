"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skinrender extends Card {
  constructor(game) {
    super(game, "Skinrender", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Skinrender;
