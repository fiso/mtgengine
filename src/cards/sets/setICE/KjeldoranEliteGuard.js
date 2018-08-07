"use strict";
const Constants = require ("../../../Constants");
const KjeldoranEliteGuardBase = require("../setME2/KjeldoranEliteGuard");

class KjeldoranEliteGuard extends KjeldoranEliteGuardBase {
  constructor (game) {
    super(game, "Kjeldoran Elite Guard", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranEliteGuard;
