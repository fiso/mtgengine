"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AureliatheWarleaderBase = require("../setV15/AureliatheWarleader.js");

class AureliatheWarleader extends AureliatheWarleaderBase {
  constructor(game) {
    super(game, "Aurelia, the Warleader", "Gatecrash", "GTC");
  }
}

module.exports = AureliatheWarleader;
