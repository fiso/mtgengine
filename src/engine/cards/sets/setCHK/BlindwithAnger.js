"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindwithAnger extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind with Anger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BlindwithAnger;
