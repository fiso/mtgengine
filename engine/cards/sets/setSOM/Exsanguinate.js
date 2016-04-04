"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Exsanguinate extends Card {
  constructor(game) {
    super(game, "Exsanguinate", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Exsanguinate;
