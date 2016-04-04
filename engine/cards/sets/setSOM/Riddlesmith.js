"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Riddlesmith extends Card {
  constructor(game) {
    super(game, "Riddlesmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Riddlesmith;
