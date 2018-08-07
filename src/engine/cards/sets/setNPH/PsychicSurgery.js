"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicSurgery extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Surgery", "New Phyrexia", "NPH");
  }
}

module.exports = PsychicSurgery;
