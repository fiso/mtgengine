"use strict";
const Constants = require ("../../../Constants");
const ForcedRetreatBase = require("../setME3/ForcedRetreat");

class ForcedRetreat extends ForcedRetreatBase {
  constructor (game) {
    super(game, "Forced Retreat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ForcedRetreat;
