"use strict";
const Constants = require ("../../../Constants");
const HunttheWeakBase = require("../setFRF/HunttheWeak");

class HunttheWeak extends HunttheWeakBase {
  constructor(game) {
    super(game, "Hunt the Weak", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HunttheWeak;
