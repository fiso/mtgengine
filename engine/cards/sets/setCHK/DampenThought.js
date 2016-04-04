"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DampenThought extends Card {
  constructor(game) {
    super(game, "Dampen Thought", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DampenThought;
