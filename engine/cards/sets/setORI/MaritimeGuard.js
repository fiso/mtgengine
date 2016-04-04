"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaritimeGuardBase = require("../setM11/MaritimeGuard.js");

class MaritimeGuard extends MaritimeGuardBase {
  constructor(game) {
    super(game, "Maritime Guard", "Magic Origins", "ORI");
  }
}

module.exports = MaritimeGuard;
