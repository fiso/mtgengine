"use strict";
const Constants = require ("../../../Constants");
const SorinGrimNemesisBase = require("../setSOI/SorinGrimNemesis");

class SorinGrimNemesis extends SorinGrimNemesisBase {
  constructor (game) {
    super(game, "Sorin, Grim Nemesis", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SorinGrimNemesis;
