"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WistfulSelkieBase = require("../setC15/WistfulSelkie.js");

class WistfulSelkie extends WistfulSelkieBase {
  constructor(game) {
    super(game, "Wistful Selkie", "Eventide", "EVE");
  }
}

module.exports = WistfulSelkie;
