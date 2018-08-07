"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicIntrusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Intrusion", "Theros", "THS");
  }
}

module.exports = PsychicIntrusion;
