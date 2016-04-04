"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VanquishtheFoul extends Card {
  constructor(game) {
    super(game, "Vanquish the Foul", "Theros", "THS");
  }
}

module.exports = VanquishtheFoul;
