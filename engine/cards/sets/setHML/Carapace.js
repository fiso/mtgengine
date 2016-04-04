"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarapaceBase = require("../set5ED/Carapace.js");

class Carapace extends CarapaceBase {
  constructor(game) {
    super(game, "Carapace", "Homelands", "HML");
  }
}

module.exports = Carapace;
