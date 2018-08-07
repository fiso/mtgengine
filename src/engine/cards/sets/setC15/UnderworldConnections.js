"use strict";
const Constants = require ("../../../Constants");
const UnderworldConnectionsBase = require("../setC17/UnderworldConnections");

class UnderworldConnections extends UnderworldConnectionsBase {
  constructor (game) {
    super(game, "Underworld Connections", "Commander 2015", "C15");
  }
}

module.exports = UnderworldConnections;
