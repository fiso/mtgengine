"use strict";
const Constants = require ("../../../Constants");
const EliteScaleguardBase = require("../setCM2/EliteScaleguard");

class EliteScaleguard extends EliteScaleguardBase {
  constructor (game) {
    super(game, "Elite Scaleguard", "Fate Reforged", "FRF");
  }
}

module.exports = EliteScaleguard;
