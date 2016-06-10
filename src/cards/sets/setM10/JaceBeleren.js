"use strict";
const Constants = require ("../../../Constants");
const JaceBelerenBase = require("../setDD3_JVC/JaceBeleren");

class JaceBeleren extends JaceBelerenBase {
  constructor (game) {
    super(game, "Jace Beleren", "Magic 2010", "M10");
  }
}

module.exports = JaceBeleren;
