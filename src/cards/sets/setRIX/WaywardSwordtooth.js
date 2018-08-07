"use strict";
const Constants = require ("../../../Constants");
const WaywardSwordtoothBase = require("../setPRIX/WaywardSwordtooth");

class WaywardSwordtooth extends WaywardSwordtoothBase {
  constructor (game) {
    super(game, "Wayward Swordtooth", "Rivals of Ixalan", "RIX");
  }
}

module.exports = WaywardSwordtooth;
