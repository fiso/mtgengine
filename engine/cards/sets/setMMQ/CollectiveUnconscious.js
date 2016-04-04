"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CollectiveUnconsciousBase = require("../setC14/CollectiveUnconscious.js");

class CollectiveUnconscious extends CollectiveUnconsciousBase {
  constructor(game) {
    super(game, "Collective Unconscious", "Mercadian Masques", "MMQ");
  }
}

module.exports = CollectiveUnconscious;
