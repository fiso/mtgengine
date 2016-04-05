"use strict";
const Constants = require ("../../../Constants");
const JacesErasureBase = require("../setM11/JacesErasure");

class JacesErasure extends JacesErasureBase {
  constructor(game) {
    super(game, "Jace's Erasure", "Magic 2012", "M12");
  }
}

module.exports = JacesErasure;
