"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifesmith extends Card {
  constructor(game) {
    super(game, "Lifesmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Lifesmith;
