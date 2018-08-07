"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldierReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldier Replica", "Mirrodin", "MRD");
  }
}

module.exports = SoldierReplica;
