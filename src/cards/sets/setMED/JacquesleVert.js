"use strict";
const Constants = require ("../../../Constants");
const JacquesleVertBase = require("../setLEG/JacquesleVert");

class JacquesleVert extends JacquesleVertBase {
  constructor (game) {
    super(game, "Jacques le Vert", "Masters Edition", "MED");
  }
}

module.exports = JacquesleVert;
