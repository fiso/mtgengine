"use strict";
const Constants = require ("../../../Constants");
const AurochsBase = require("../setME2/Aurochs");

class Aurochs extends AurochsBase {
  constructor (game) {
    super(game, "Aurochs", "Ice Age", "ICE");
  }
}

module.exports = Aurochs;
