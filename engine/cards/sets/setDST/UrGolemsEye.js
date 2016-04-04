"use strict";
const Constants = require ("../../../Constants");
const UrGolemsEyeBase = require("../setC14/UrGolemsEye");

class UrGolemsEye extends UrGolemsEyeBase {
  constructor(game) {
    super(game, "Ur-Golem's Eye", "Darksteel", "DST");
  }
}

module.exports = UrGolemsEye;
