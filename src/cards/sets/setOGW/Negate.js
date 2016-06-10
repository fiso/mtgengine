"use strict";
const Constants = require ("../../../Constants");
const NegateBase = require("../setDTK/Negate");

class Negate extends NegateBase {
  constructor (game) {
    super(game, "Negate", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Negate;
