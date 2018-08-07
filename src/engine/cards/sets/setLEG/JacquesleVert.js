"use strict";
const Constants = require ("../../../Constants");
const JacquesleVertBase = require("../setMED/JacquesleVert");

class JacquesleVert extends JacquesleVertBase {
  constructor (game) {
    super(game, "Jacques le Vert", "Legends", "LEG");
  }
}

module.exports = JacquesleVert;
