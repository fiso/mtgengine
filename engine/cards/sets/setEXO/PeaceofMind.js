"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeaceofMind extends UnimplementedCard {
  constructor(game) {
    super(game, "Peace of Mind", "Exodus", "EXO");
  }
}

module.exports = PeaceofMind;
