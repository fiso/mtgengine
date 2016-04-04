"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Painsmith extends Card {
  constructor(game) {
    super(game, "Painsmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Painsmith;
