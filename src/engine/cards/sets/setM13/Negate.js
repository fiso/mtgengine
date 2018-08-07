"use strict";
const Constants = require ("../../../Constants");
const NegateBase = require("../setSS1/Negate");

class Negate extends NegateBase {
  constructor (game) {
    super(game, "Negate", "Magic 2013", "M13");
  }
}

module.exports = Negate;
