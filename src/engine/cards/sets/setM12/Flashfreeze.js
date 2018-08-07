"use strict";
const Constants = require ("../../../Constants");
const FlashfreezeBase = require("../setMM2/Flashfreeze");

class Flashfreeze extends FlashfreezeBase {
  constructor (game) {
    super(game, "Flashfreeze", "Magic 2012", "M12");
  }
}

module.exports = Flashfreeze;
