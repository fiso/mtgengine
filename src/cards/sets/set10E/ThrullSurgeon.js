"use strict";
const Constants = require ("../../../Constants");
const ThrullSurgeonBase = require("../setEXO/ThrullSurgeon");

class ThrullSurgeon extends ThrullSurgeonBase {
  constructor (game) {
    super(game, "Thrull Surgeon", "Tenth Edition", "10E");
  }
}

module.exports = ThrullSurgeon;
