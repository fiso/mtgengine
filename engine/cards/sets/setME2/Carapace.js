"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarapaceBase = require("../set5ED/Carapace.js");

class Carapace extends CarapaceBase {
  constructor(game) {
    super(game, "Carapace", "Masters Edition II", "ME2");
  }
}

module.exports = Carapace;
