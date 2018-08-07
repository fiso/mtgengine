"use strict";
const Constants = require ("../../../Constants");
const EnsnaringBridgeBase = require("../setA25/EnsnaringBridge");

class EnsnaringBridge extends EnsnaringBridgeBase {
  constructor (game) {
    super(game, "Ensnaring Bridge", "Stronghold", "STH");
  }
}

module.exports = EnsnaringBridge;
