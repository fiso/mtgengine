"use strict";
const Constants = require ("../../../Constants");
const ImperialSealBase = require("../setME2/ImperialSeal");

class ImperialSeal extends ImperialSealBase {
  constructor (game) {
    super(game, "Imperial Seal", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialSeal;
