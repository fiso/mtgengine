"use strict";
const Constants = require ("../../../Constants");
const FateUnravelerBase = require("../setC15/FateUnraveler");

class FateUnraveler extends FateUnravelerBase {
  constructor (game) {
    super(game, "Fate Unraveler", "Born of the Gods", "BNG");
  }
}

module.exports = FateUnraveler;
