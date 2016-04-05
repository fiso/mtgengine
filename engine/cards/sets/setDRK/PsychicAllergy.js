"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicAllergy extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Allergy", "The Dark", "DRK");
  }
}

module.exports = PsychicAllergy;
