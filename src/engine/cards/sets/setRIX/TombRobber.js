"use strict";
const Constants = require ("../../../Constants");
const TombRobberBase = require("../setPRIX/TombRobber");

class TombRobber extends TombRobberBase {
  constructor (game) {
    super(game, "Tomb Robber", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TombRobber;
