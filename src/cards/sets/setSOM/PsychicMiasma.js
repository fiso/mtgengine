"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicMiasma extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Miasma", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PsychicMiasma;
