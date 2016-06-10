"use strict";
const Constants = require ("../../../Constants");
const MoggFlunkiesBase = require("../setATH/MoggFlunkies");

class MoggFlunkies extends MoggFlunkiesBase {
  constructor (game) {
    super(game, "Mogg Flunkies", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = MoggFlunkies;
