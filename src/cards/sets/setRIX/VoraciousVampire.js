"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Voracious Vampire", "Rivals of Ixalan", "RIX");
  }
}

module.exports = VoraciousVampire;
