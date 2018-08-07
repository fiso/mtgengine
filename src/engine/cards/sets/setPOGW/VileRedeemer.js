"use strict";
const Constants = require ("../../../Constants");
const VileRedeemerBase = require("../setOGW/VileRedeemer");

class VileRedeemer extends VileRedeemerBase {
  constructor (game) {
    super(game, "Vile Redeemer", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = VileRedeemer;
