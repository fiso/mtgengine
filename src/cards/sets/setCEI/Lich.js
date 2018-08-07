"use strict";
const Constants = require ("../../../Constants");
const LichBase = require("../setME4/Lich");

class Lich extends LichBase {
  constructor (game) {
    super(game, "Lich", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Lich;
