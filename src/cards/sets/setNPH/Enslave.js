"use strict";
const Constants = require ("../../../Constants");
const EnslaveBase = require("../setGVL/Enslave");

class Enslave extends EnslaveBase {
  constructor (game) {
    super(game, "Enslave", "New Phyrexia", "NPH");
  }
}

module.exports = Enslave;
