"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneHavenMedic extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Haven Medic", "Battle for Zendikar", "BFZ");
  }
}

module.exports = StoneHavenMedic;
