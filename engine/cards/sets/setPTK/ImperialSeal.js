"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImperialSealBase = require("../setME2/ImperialSeal.js");

class ImperialSeal extends ImperialSealBase {
  constructor(game) {
    super(game, "Imperial Seal", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialSeal;
