"use strict";
const Constants = require ("../../../Constants");
const HeroesReunionBase = require("../setRTR/HeroesReunion");

class HeroesReunion extends HeroesReunionBase {
  constructor (game) {
    super(game, "Heroes' Reunion", "Archenemy", "ARC");
  }
}

module.exports = HeroesReunion;
