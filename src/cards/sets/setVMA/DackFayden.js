"use strict";
const Constants = require ("../../../Constants");
const DackFaydenBase = require("../setEMA/DackFayden");

class DackFayden extends DackFaydenBase {
  constructor (game) {
    super(game, "Dack Fayden", "Vintage Masters", "VMA");
  }
}

module.exports = DackFayden;
