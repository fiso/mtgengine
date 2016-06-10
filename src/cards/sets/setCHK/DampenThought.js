"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampenThought extends UnimplementedCard {
  constructor (game) {
    super(game, "Dampen Thought", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DampenThought;
