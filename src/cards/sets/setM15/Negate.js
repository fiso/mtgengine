"use strict";
const Constants = require ("../../../Constants");
const NegateBase = require("../setDTK/Negate");

class Negate extends NegateBase {
  constructor(game) {
    super(game, "Negate", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Negate;
