"use strict";
const Constants = require ("../../../Constants");
const ThornwealdArcherBase = require("../setCMA/ThornwealdArcher");

class ThornwealdArcher extends ThornwealdArcherBase {
  constructor (game) {
    super(game, "Thornweald Archer", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = ThornwealdArcher;
