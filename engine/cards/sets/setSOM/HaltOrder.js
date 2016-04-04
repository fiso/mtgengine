"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HaltOrder extends Card {
  constructor(game) {
    super(game, "Halt Order", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HaltOrder;
