"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousVacuum extends UnimplementedCard {
  constructor (game) {
    super(game, "Voracious Vacuum", "Unstable", "UST");
  }
}

module.exports = VoraciousVacuum;
