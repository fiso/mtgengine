"use strict";
const Constants = require ("../../../Constants");
const JacesErasureBase = require("../setM12/JacesErasure");

class JacesErasure extends JacesErasureBase {
  constructor (game) {
    super(game, "Jace's Erasure", "Magic 2011", "M11");
  }
}

module.exports = JacesErasure;
