"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranEliteGuardBase = require("../setCST/KjeldoranEliteGuard.js");

class KjeldoranEliteGuard extends KjeldoranEliteGuardBase {
  constructor(game) {
    super(game, "Kjeldoran Elite Guard", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranEliteGuard;
