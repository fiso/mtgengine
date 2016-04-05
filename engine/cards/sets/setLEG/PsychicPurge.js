"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicPurge extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Purge", "Legends", "LEG");
  }
}

module.exports = PsychicPurge;
