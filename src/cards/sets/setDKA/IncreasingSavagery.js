"use strict";
const Constants = require ("../../../Constants");
const IncreasingSavageryBase = require("../setDDS/IncreasingSavagery");

class IncreasingSavagery extends IncreasingSavageryBase {
  constructor (game) {
    super(game, "Increasing Savagery", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingSavagery;
