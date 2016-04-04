"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonAppeasement extends Card {
  constructor(game) {
    super(game, "Dragon Appeasement", "Alara Reborn", "ARB");
  }
}

module.exports = DragonAppeasement;
