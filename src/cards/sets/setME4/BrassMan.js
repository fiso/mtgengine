"use strict";
const Constants = require ("../../../Constants");
const BrassManBase = require("../setARN/BrassMan");

class BrassMan extends BrassManBase {
  constructor (game) {
    super(game, "Brass Man", "Masters Edition IV", "ME4");
  }
}

module.exports = BrassMan;
