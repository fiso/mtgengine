"use strict";
const Constants = require ("../../../Constants");
const MoggFlunkiesBase = require("../setA25/MoggFlunkies");

class MoggFlunkies extends MoggFlunkiesBase {
  constructor (game) {
    super(game, "Mogg Flunkies", "World Championship Decks 1998", "WC98");
  }
}

module.exports = MoggFlunkies;
