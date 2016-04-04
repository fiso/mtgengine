"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WieldingtheGreenDragon extends Card {
  constructor(game) {
    super(game, "Wielding the Green Dragon", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WieldingtheGreenDragon;
