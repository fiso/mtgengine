"use strict";
const Constants = require ("../../../Constants");
const EliteScaleguardBase = require("../setCM2/EliteScaleguard");

class EliteScaleguard extends EliteScaleguardBase {
  constructor (game) {
    super(game, "Elite Scaleguard", "Commander 2016", "C16");
  }
}

module.exports = EliteScaleguard;
