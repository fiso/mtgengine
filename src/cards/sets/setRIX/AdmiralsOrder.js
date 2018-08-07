"use strict";
const Constants = require ("../../../Constants");
const AdmiralsOrderBase = require("../setPRIX/AdmiralsOrder");

class AdmiralsOrder extends AdmiralsOrderBase {
  constructor (game) {
    super(game, "Admiral's Order", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AdmiralsOrder;
