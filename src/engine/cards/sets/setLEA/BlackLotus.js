"use strict";
const Constants = require ("../../../Constants");
const BlackLotusBase = require("../setVMA/BlackLotus");

class BlackLotus extends BlackLotusBase {
  constructor (game) {
    super(game, "Black Lotus", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BlackLotus;
