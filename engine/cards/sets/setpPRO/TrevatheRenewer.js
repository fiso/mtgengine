"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrevatheRenewerBase = require("../setDDE/TrevatheRenewer.js");

class TrevatheRenewer extends TrevatheRenewerBase {
  constructor(game) {
    super(game, "Treva, the Renewer", "Pro Tour", "pPRO");
  }
}

module.exports = TrevatheRenewer;
