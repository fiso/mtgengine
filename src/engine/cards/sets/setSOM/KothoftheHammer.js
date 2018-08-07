"use strict";
const Constants = require ("../../../Constants");
const KothoftheHammerBase = require("../setDDI/KothoftheHammer");

class KothoftheHammer extends KothoftheHammerBase {
  constructor (game) {
    super(game, "Koth of the Hammer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KothoftheHammer;
