"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecroticSliverBase = require("../setPLC/NecroticSliver.js");

class NecroticSliver extends NecroticSliverBase {
  constructor(game) {
    super(game, "Necrotic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = NecroticSliver;
