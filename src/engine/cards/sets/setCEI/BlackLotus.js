"use strict";
const Constants = require ("../../../Constants");
const BlackLotusBase = require("../setVMA/BlackLotus");

class BlackLotus extends BlackLotusBase {
  constructor (game) {
    super(game, "Black Lotus", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = BlackLotus;
