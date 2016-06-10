"use strict";
const Constants = require ("../../../Constants");
const RuinationBase = require("../setCMD/Ruination");

class Ruination extends RuinationBase {
  constructor (game) {
    super(game, "Ruination", "Stronghold", "STH");
  }
}

module.exports = Ruination;
