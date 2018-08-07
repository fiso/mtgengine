"use strict";
const Constants = require ("../../../Constants");
const FyndhornPollenBase = require("../setME2/FyndhornPollen");

class FyndhornPollen extends FyndhornPollenBase {
  constructor (game) {
    super(game, "Fyndhorn Pollen", "Ice Age", "ICE");
  }
}

module.exports = FyndhornPollen;
