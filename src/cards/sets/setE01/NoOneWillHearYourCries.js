"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoOneWillHearYourCries extends UnimplementedCard {
  constructor (game) {
    super(game, "No One Will Hear Your Cries", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = NoOneWillHearYourCries;
