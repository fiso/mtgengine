"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, "Control Magic", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ControlMagic;
