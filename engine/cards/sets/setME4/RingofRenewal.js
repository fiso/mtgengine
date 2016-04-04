"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RingofRenewalBase = require("../setFEM/RingofRenewal.js");

class RingofRenewal extends RingofRenewalBase {
  constructor(game) {
    super(game, "Ring of Renewal", "Masters Edition IV", "ME4");
  }
}

module.exports = RingofRenewal;
