"use strict";
const Constants = require ("../../../Constants");
const WarsTollBase = require("../setBBD/WarsToll");

class WarsToll extends WarsTollBase {
  constructor (game) {
    super(game, "War's Toll", "Dissension", "DIS");
  }
}

module.exports = WarsToll;
