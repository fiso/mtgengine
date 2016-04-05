"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicMembrane extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Membrane", "Mirrodin", "MRD");
  }
}

module.exports = PsychicMembrane;
