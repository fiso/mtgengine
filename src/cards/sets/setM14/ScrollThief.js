"use strict";
const Constants = require ("../../../Constants");
const ScrollThiefBase = require("../setDDT/ScrollThief");

class ScrollThief extends ScrollThiefBase {
  constructor (game) {
    super(game, "Scroll Thief", "Magic 2014", "M14");
  }
}

module.exports = ScrollThief;
