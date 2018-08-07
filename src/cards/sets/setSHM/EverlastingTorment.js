"use strict";
const Constants = require ("../../../Constants");
const EverlastingTormentBase = require("../setC16/EverlastingTorment");

class EverlastingTorment extends EverlastingTormentBase {
  constructor (game) {
    super(game, "Everlasting Torment", "Shadowmoor", "SHM");
  }
}

module.exports = EverlastingTorment;
