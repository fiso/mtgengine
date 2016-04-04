"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WirewoodLodgeBase = require("../setDD3_EVG/WirewoodLodge.js");

class WirewoodLodge extends WirewoodLodgeBase {
  constructor(game) {
    super(game, "Wirewood Lodge", "Onslaught", "ONS");
  }
}

module.exports = WirewoodLodge;
