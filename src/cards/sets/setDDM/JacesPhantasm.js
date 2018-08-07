"use strict";
const Constants = require ("../../../Constants");
const JacesPhantasmBase = require("../setIMA/JacesPhantasm");

class JacesPhantasm extends JacesPhantasmBase {
  constructor (game) {
    super(game, "Jace's Phantasm", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesPhantasm;
