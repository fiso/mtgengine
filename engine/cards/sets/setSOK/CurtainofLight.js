"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CurtainofLight extends Card {
  constructor(game) {
    super(game, "Curtain of Light", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CurtainofLight;
