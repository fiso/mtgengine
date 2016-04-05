"use strict";
const Constants = require ("../../../Constants");
const FyndhornPollenBase = require("../setICE/FyndhornPollen");

class FyndhornPollen extends FyndhornPollenBase {
  constructor(game) {
    super(game, "Fyndhorn Pollen", "Masters Edition II", "ME2");
  }
}

module.exports = FyndhornPollen;
