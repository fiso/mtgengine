"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnderworldConnectionsBase = require("../setC15/UnderworldConnections.js");

class UnderworldConnections extends UnderworldConnectionsBase {
  constructor(game) {
    super(game, "Underworld Connections", "Return to Ravnica", "RTR");
  }
}

module.exports = UnderworldConnections;
