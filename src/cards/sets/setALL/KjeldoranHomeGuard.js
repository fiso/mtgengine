"use strict";
const Constants = require ("../../../Constants");
const KjeldoranHomeGuardBase = require("../setME2/KjeldoranHomeGuard");

class KjeldoranHomeGuard extends KjeldoranHomeGuardBase {
  constructor (game) {
    super(game, "Kjeldoran Home Guard", "Alliances", "ALL");
  }
}

module.exports = KjeldoranHomeGuard;
