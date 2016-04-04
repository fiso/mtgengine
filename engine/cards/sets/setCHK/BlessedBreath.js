"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessedBreath extends Card {
  constructor(game) {
    super(game, "Blessed Breath", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BlessedBreath;
