"use strict";
const Constants = require ("../../../Constants");
const DackFaydenBase = require("../setEMA/DackFayden");

class DackFayden extends DackFaydenBase {
  constructor (game) {
    super(game, "Dack Fayden", "Conspiracy", "CNS");
  }
}

module.exports = DackFayden;
