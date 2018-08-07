"use strict";
const Constants = require ("../../../Constants");
const VoreloftheHullCladeBase = require("../setCM2/VoreloftheHullClade");

class VoreloftheHullClade extends VoreloftheHullCladeBase {
  constructor (game) {
    super(game, "Vorel of the Hull Clade", "Dragon's Maze", "DGM");
  }
}

module.exports = VoreloftheHullClade;
