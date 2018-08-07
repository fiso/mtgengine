"use strict";
const Constants = require ("../../../Constants");
const HunttheWeakBase = require("../setRIX/HunttheWeak");

class HunttheWeak extends HunttheWeakBase {
  constructor (game) {
    super(game, "Hunt the Weak", "Kaladesh", "KLD");
  }
}

module.exports = HunttheWeak;
