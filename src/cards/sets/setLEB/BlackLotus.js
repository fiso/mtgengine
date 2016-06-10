"use strict";
const Constants = require ("../../../Constants");
const BlackLotusBase = require("../setCED/BlackLotus");

class BlackLotus extends BlackLotusBase {
  constructor (game) {
    super(game, "Black Lotus", "Limited Edition Beta", "LEB");
  }
}

module.exports = BlackLotus;
