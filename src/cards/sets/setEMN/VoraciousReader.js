"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousReader extends UnimplementedCard {
  constructor (game) {
    super(game, "Voracious Reader", "Eldritch Moon", "EMN");
  }
}

module.exports = VoraciousReader;
