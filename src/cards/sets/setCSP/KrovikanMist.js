"use strict";
const Constants = require ("../../../Constants");
const KrovikanMistBase = require("../setDDM/KrovikanMist");

class KrovikanMist extends KrovikanMistBase {
  constructor (game) {
    super(game, "Krovikan Mist", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanMist;
