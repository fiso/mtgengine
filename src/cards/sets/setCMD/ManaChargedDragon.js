"use strict";
const Constants = require ("../../../Constants");
const ManaChargedDragonBase = require("../setCMA/ManaChargedDragon");

class ManaChargedDragon extends ManaChargedDragonBase {
  constructor (game) {
    super(game, "Mana-Charged Dragon", "Commander 2011", "CMD");
  }
}

module.exports = ManaChargedDragon;
