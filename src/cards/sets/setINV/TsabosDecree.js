"use strict";
const Constants = require ("../../../Constants");
const TsabosDecreeBase = require("../setWC01/TsabosDecree");

class TsabosDecree extends TsabosDecreeBase {
  constructor (game) {
    super(game, "Tsabo's Decree", "Invasion", "INV");
  }
}

module.exports = TsabosDecree;
