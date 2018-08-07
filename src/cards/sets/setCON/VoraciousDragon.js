"use strict";
const Constants = require ("../../../Constants");
const VoraciousDragonBase = require("../setDDG/VoraciousDragon");

class VoraciousDragon extends VoraciousDragonBase {
  constructor (game) {
    super(game, "Voracious Dragon", "Conflux", "CON");
  }
}

module.exports = VoraciousDragon;
