"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunicRepetition extends UnimplementedCard {
  constructor (game) {
    super(game, "Runic Repetition", "Innistrad", "ISD");
  }
}

module.exports = RunicRepetition;
