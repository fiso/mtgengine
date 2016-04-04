"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoercivePortalBase = require("../setCNS/CoercivePortal.js");

class CoercivePortal extends CoercivePortalBase {
  constructor(game) {
    super(game, "Coercive Portal", "Vintage Masters", "VMA");
  }
}

module.exports = CoercivePortal;
