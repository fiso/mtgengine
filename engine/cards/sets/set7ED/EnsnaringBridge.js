"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnsnaringBridgeBase = require("../set8ED/EnsnaringBridge.js");

class EnsnaringBridge extends EnsnaringBridgeBase {
  constructor(game) {
    super(game, "Ensnaring Bridge", "Seventh Edition", "7ED");
  }
}

module.exports = EnsnaringBridge;
