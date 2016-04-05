"use strict";
const Constants = require ("../../../Constants");
const HeroesReunionBase = require("../setARC/HeroesReunion");

class HeroesReunion extends HeroesReunionBase {
  constructor(game) {
    super(game, "Heroes' Reunion", "Invasion", "INV");
  }
}

module.exports = HeroesReunion;
