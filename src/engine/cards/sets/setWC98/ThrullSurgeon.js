"use strict";
const Constants = require ("../../../Constants");
const ThrullSurgeonBase = require("../setTPR/ThrullSurgeon");

class ThrullSurgeon extends ThrullSurgeonBase {
  constructor (game) {
    super(game, "Thrull Surgeon", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ThrullSurgeon;
