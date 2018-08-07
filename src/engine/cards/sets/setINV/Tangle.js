"use strict";
const Constants = require ("../../../Constants");
const TangleBase = require("../setVMA/Tangle");

class Tangle extends TangleBase {
  constructor (game) {
    super(game, "Tangle", "Invasion", "INV");
  }
}

module.exports = Tangle;
