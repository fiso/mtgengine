"use strict";
const Constants = require ("../../../Constants");
const EnsnaringBridgeBase = require("../setA25/EnsnaringBridge");

class EnsnaringBridge extends EnsnaringBridgeBase {
  constructor (game) {
    super(game, "Ensnaring Bridge", "Seventh Edition", "7ED");
  }
}

module.exports = EnsnaringBridge;
