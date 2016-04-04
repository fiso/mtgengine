"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonEgg extends Card {
  constructor(game) {
    super(game, "Dragon Egg", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DragonEgg;
