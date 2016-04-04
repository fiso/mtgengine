"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacesErasureBase = require("../setM11/JacesErasure.js");

class JacesErasure extends JacesErasureBase {
  constructor(game) {
    super(game, "Jace's Erasure", "Magic 2012", "M12");
  }
}

module.exports = JacesErasure;
