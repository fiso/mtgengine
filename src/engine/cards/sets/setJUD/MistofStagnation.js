"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistofStagnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Mist of Stagnation", "Judgment", "JUD");
  }
}

module.exports = MistofStagnation;
