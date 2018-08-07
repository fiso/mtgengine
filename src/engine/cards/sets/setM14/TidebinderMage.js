"use strict";
const Constants = require ("../../../Constants");
const TidebinderMageBase = require("../setDDT/TidebinderMage");

class TidebinderMage extends TidebinderMageBase {
  constructor (game) {
    super(game, "Tidebinder Mage", "Magic 2014", "M14");
  }
}

module.exports = TidebinderMage;
