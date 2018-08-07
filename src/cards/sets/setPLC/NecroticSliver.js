"use strict";
const Constants = require ("../../../Constants");
const NecroticSliverBase = require("../setH09/NecroticSliver");

class NecroticSliver extends NecroticSliverBase {
  constructor (game) {
    super(game, "Necrotic Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = NecroticSliver;
