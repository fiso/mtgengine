"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanalMonitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Canal Monitor", "Rivals of Ixalan", "RIX");
  }
}

module.exports = CanalMonitor;
