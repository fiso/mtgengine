"use strict";
const Constants = require ("../../../Constants");
const PhyrexianReclamationBase = require("../setC13/PhyrexianReclamation");

class PhyrexianReclamation extends PhyrexianReclamationBase {
  constructor (game) {
    super(game, "Phyrexian Reclamation", "Commander 2015", "C15");
  }
}

module.exports = PhyrexianReclamation;
