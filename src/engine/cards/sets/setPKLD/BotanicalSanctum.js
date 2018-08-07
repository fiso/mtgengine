"use strict";
const Constants = require ("../../../Constants");
const BotanicalSanctumBase = require("../setKLD/BotanicalSanctum");

class BotanicalSanctum extends BotanicalSanctumBase {
  constructor (game) {
    super(game, "Botanical Sanctum", "Kaladesh Promos", "PKLD");
  }
}

module.exports = BotanicalSanctum;
