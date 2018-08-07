"use strict";
const Constants = require ("../../../Constants");
const AccordersShieldBase = require("../setM14/AccordersShield");

class AccordersShield extends AccordersShieldBase {
  constructor (game) {
    super(game, "Accorder's Shield", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AccordersShield;
