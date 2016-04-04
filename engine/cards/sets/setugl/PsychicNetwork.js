"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicNetwork extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Network", "Unglued", "UGL");
  }
}

module.exports = PsychicNetwork;
