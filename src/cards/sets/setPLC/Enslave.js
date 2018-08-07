"use strict";
const Constants = require ("../../../Constants");
const EnslaveBase = require("../setGVL/Enslave");

class Enslave extends EnslaveBase {
  constructor (game) {
    super(game, "Enslave", "Planar Chaos", "PLC");
  }
}

module.exports = Enslave;
