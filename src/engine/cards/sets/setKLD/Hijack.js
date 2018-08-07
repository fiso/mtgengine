"use strict";
const Constants = require ("../../../Constants");
const HijackBase = require("../setXLN/Hijack");

class Hijack extends HijackBase {
  constructor (game) {
    super(game, "Hijack", "Kaladesh", "KLD");
  }
}

module.exports = Hijack;
