"use strict";
const Constants = require ("../../../Constants");
const CemeteryGateBase = require("../setPZ2/CemeteryGate");

class CemeteryGate extends CemeteryGateBase {
  constructor (game) {
    super(game, "Cemetery Gate", "Homelands", "HML");
  }
}

module.exports = CemeteryGate;
