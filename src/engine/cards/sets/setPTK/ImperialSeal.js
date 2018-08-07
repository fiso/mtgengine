"use strict";
const Constants = require ("../../../Constants");
const ImperialSealBase = require("../setJ16/ImperialSeal");

class ImperialSeal extends ImperialSealBase {
  constructor (game) {
    super(game, "Imperial Seal", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialSeal;
