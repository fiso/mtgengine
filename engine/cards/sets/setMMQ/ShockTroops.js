"use strict";
const Constants = require ("../../../Constants");
const ShockTroopsBase = require("../set8ED/ShockTroops");

class ShockTroops extends ShockTroopsBase {
  constructor(game) {
    super(game, "Shock Troops", "Mercadian Masques", "MMQ");
  }
}

module.exports = ShockTroops;
