"use strict";
const Constants = require ("../../../Constants");
const AncientGrudgeBase = require("../setMM3/AncientGrudge");

class AncientGrudge extends AncientGrudgeBase {
  constructor (game) {
    super(game, "Ancient Grudge", "Friday Night Magic 2012", "F12");
  }
}

module.exports = AncientGrudge;
