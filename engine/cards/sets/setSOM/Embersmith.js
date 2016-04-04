"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Embersmith extends Card {
  constructor(game) {
    super(game, "Embersmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Embersmith;
