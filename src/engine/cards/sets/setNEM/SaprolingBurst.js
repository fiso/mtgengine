"use strict";
const Constants = require ("../../../Constants");
const SaprolingBurstBase = require("../setVMA/SaprolingBurst");

class SaprolingBurst extends SaprolingBurstBase {
  constructor (game) {
    super(game, "Saproling Burst", "Nemesis", "NEM");
  }
}

module.exports = SaprolingBurst;
