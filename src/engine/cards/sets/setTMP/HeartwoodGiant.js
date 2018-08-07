"use strict";
const Constants = require ("../../../Constants");
const HeartwoodGiantBase = require("../setTPR/HeartwoodGiant");

class HeartwoodGiant extends HeartwoodGiantBase {
  constructor (game) {
    super(game, "Heartwood Giant", "Tempest", "TMP");
  }
}

module.exports = HeartwoodGiant;
