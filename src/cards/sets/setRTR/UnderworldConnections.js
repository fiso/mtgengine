"use strict";
const Constants = require ("../../../Constants");
const UnderworldConnectionsBase = require("../setC17/UnderworldConnections");

class UnderworldConnections extends UnderworldConnectionsBase {
  constructor (game) {
    super(game, "Underworld Connections", "Return to Ravnica", "RTR");
  }
}

module.exports = UnderworldConnections;
