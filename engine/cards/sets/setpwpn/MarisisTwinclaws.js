"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarisisTwinclawsBase = require("../setARB/MarisisTwinclaws.js");

class MarisisTwinclaws extends MarisisTwinclawsBase {
  constructor(game) {
    super(game, "Marisi's Twinclaws", "WPN and Gateway", "pWPN");
  }
}

module.exports = MarisisTwinclaws;
