"use strict";
const Constants = require ("../../../Constants");
const NegateBase = require("../setDTK/Negate");

class Negate extends NegateBase {
  constructor(game) {
    super(game, "Negate", "Magic 2012", "M12");
  }
}

module.exports = Negate;
