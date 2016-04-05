"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MelirasKeepers extends UnimplementedCard {
  constructor(game) {
    super(game, "Melira's Keepers", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MelirasKeepers;
