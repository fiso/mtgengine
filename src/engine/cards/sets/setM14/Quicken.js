"use strict";
const Constants = require ("../../../Constants");
const QuickenBase = require("../setDDS/Quicken");

class Quicken extends QuickenBase {
  constructor (game) {
    super(game, "Quicken", "Magic 2014", "M14");
  }
}

module.exports = Quicken;
