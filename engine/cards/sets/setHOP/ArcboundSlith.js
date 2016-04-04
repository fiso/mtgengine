"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcboundSlithBase = require("../setDST/ArcboundSlith.js");

class ArcboundSlith extends ArcboundSlithBase {
  constructor(game) {
    super(game, "Arcbound Slith", "Planechase", "HOP");
  }
}

module.exports = ArcboundSlith;
