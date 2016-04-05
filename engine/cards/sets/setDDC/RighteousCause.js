"use strict";
const Constants = require ("../../../Constants");
const RighteousCauseBase = require("../setDD3_DVD/RighteousCause");

class RighteousCause extends RighteousCauseBase {
  constructor(game) {
    super(game, "Righteous Cause", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = RighteousCause;
