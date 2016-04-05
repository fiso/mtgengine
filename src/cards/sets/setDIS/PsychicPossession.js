"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicPossession extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Possession", "Dissension", "DIS");
  }
}

module.exports = PsychicPossession;
