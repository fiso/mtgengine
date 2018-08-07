"use strict";
const Constants = require ("../../../Constants");
const KjeldoranEliteGuardBase = require("../setME2/KjeldoranEliteGuard");

class KjeldoranEliteGuard extends KjeldoranEliteGuardBase {
  constructor (game) {
    super(game, "Kjeldoran Elite Guard", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = KjeldoranEliteGuard;
