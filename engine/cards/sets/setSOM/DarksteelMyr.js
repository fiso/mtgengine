"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelMyr extends Card {
  constructor(game) {
    super(game, "Darksteel Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelMyr;
