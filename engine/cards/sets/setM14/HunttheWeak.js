"use strict";
const Constants = require ("../../../Constants");
const HunttheWeakBase = require("../setFRF/HunttheWeak");

class HunttheWeak extends HunttheWeakBase {
  constructor(game) {
    super(game, "Hunt the Weak", "Magic 2014 Core Set", "M14");
  }
}

module.exports = HunttheWeak;
