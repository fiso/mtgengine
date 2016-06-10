"use strict";
const Constants = require ("../../../Constants");
const NecroticSliverBase = require("../setPLC/NecroticSliver");

class NecroticSliver extends NecroticSliverBase {
  constructor (game) {
    super(game, "Necrotic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = NecroticSliver;
