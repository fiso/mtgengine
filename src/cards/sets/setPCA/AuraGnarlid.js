"use strict";
const Constants = require ("../../../Constants");
const AuraGnarlidBase = require("../setC18/AuraGnarlid");

class AuraGnarlid extends AuraGnarlidBase {
  constructor (game) {
    super(game, "Aura Gnarlid", "Planechase Anthology", "PCA");
  }
}

module.exports = AuraGnarlid;
