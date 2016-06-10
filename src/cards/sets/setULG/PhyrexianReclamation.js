"use strict";
const Constants = require ("../../../Constants");
const PhyrexianReclamationBase = require("../setC13/PhyrexianReclamation");

class PhyrexianReclamation extends PhyrexianReclamationBase {
  constructor (game) {
    super(game, "Phyrexian Reclamation", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianReclamation;
