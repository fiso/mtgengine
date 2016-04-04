"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MelirasKeepers extends Card {
  constructor(game) {
    super(game, "Melira's Keepers", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MelirasKeepers;
