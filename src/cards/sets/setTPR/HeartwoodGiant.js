"use strict";
const Constants = require ("../../../Constants");
const HeartwoodGiantBase = require("../setTMP/HeartwoodGiant");

class HeartwoodGiant extends HeartwoodGiantBase {
  constructor(game) {
    super(game, "Heartwood Giant", "Tempest Remastered", "TPR");
  }
}

module.exports = HeartwoodGiant;
