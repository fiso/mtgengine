"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeroesReunionBase = require("../setARC/HeroesReunion.js");

class HeroesReunion extends HeroesReunionBase {
  constructor(game) {
    super(game, "Heroes' Reunion", "Return to Ravnica", "RTR");
  }
}

module.exports = HeroesReunion;
