"use strict";
const Constants = require ("../../../Constants");
const FortifiedVillageBase = require("../setSOI/FortifiedVillage");

class FortifiedVillage extends FortifiedVillageBase {
  constructor (game) {
    super(game, "Fortified Village", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = FortifiedVillage;
