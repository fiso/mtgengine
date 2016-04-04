"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrullSurgeonBase = require("../setEXO/ThrullSurgeon.js");

class ThrullSurgeon extends ThrullSurgeonBase {
  constructor(game) {
    super(game, "Thrull Surgeon", "Tempest Remastered", "TPR");
  }
}

module.exports = ThrullSurgeon;
