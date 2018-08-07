"use strict";
const Constants = require ("../../../Constants");
const TangleBase = require("../setVMA/Tangle");

class Tangle extends TangleBase {
  constructor (game) {
    super(game, "Tangle", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Tangle;
