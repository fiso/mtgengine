"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShockTroopsBase = require("../set8ED/ShockTroops.js");

class ShockTroops extends ShockTroopsBase {
  constructor(game) {
    super(game, "Shock Troops", "Mercadian Masques", "MMQ");
  }
}

module.exports = ShockTroops;
