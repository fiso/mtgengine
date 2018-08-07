"use strict";
const Constants = require ("../../../Constants");
const FlashfreezeBase = require("../setMM2/Flashfreeze");

class Flashfreeze extends FlashfreezeBase {
  constructor (game) {
    super(game, "Flashfreeze", "Magic 2011", "M11");
  }
}

module.exports = Flashfreeze;
