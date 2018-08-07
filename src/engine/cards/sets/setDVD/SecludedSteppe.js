"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setC18/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = SecludedSteppe;
