"use strict";
const Constants = require ("../../../Constants");
const EnsnaringBridgeBase = require("../setA25/EnsnaringBridge");

class EnsnaringBridge extends EnsnaringBridgeBase {
  constructor (game) {
    super(game, "Ensnaring Bridge", "Eighth Edition", "8ED");
  }
}

module.exports = EnsnaringBridge;
