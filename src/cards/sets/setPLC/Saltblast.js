"use strict";
const Constants = require ("../../../Constants");
const SaltblastBase = require("../setDDF/Saltblast");

class Saltblast extends SaltblastBase {
  constructor (game) {
    super(game, "Saltblast", "Planar Chaos", "PLC");
  }
}

module.exports = Saltblast;
