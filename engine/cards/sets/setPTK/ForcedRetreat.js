"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForcedRetreatBase = require("../setME3/ForcedRetreat.js");

class ForcedRetreat extends ForcedRetreatBase {
  constructor(game) {
    super(game, "Forced Retreat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ForcedRetreat;
