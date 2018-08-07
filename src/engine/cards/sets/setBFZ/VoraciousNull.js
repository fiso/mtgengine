"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousNull extends UnimplementedCard {
  constructor (game) {
    super(game, "Voracious Null", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VoraciousNull;
