"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnifexDemon extends Card {
  constructor(game) {
    super(game, "Carnifex Demon", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CarnifexDemon;
