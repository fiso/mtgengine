"use strict";
const Constants = require ("../../../Constants");
const HeroesReunionBase = require("../setARC/HeroesReunion");

class HeroesReunion extends HeroesReunionBase {
  constructor (game) {
    super(game, "Heroes' Reunion", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = HeroesReunion;
