"use strict";
const Constants = require ("../../../Constants");
const SaprolingBurstBase = require("../setVMA/SaprolingBurst");

class SaprolingBurst extends SaprolingBurstBase {
  constructor (game) {
    super(game, "Saproling Burst", "World Championship Decks 2001", "WC01");
  }
}

module.exports = SaprolingBurst;
