"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeldonMaraudersBase = require("../setPLC/KeldonMarauders.js");

class KeldonMarauders extends KeldonMaraudersBase {
  constructor(game) {
    super(game, "Keldon Marauders", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = KeldonMarauders;
