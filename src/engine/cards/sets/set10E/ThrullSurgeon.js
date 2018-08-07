"use strict";
const Constants = require ("../../../Constants");
const ThrullSurgeonBase = require("../setTPR/ThrullSurgeon");

class ThrullSurgeon extends ThrullSurgeonBase {
  constructor (game) {
    super(game, "Thrull Surgeon", "Tenth Edition", "10E");
  }
}

module.exports = ThrullSurgeon;
