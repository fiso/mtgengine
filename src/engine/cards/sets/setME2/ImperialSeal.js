"use strict";
const Constants = require ("../../../Constants");
const ImperialSealBase = require("../setJ16/ImperialSeal");

class ImperialSeal extends ImperialSealBase {
  constructor (game) {
    super(game, "Imperial Seal", "Masters Edition II", "ME2");
  }
}

module.exports = ImperialSeal;
