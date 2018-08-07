"use strict";
const Constants = require ("../../../Constants");
const MagistratesScepterBase = require("../setM19/MagistratesScepter");

class MagistratesScepter extends MagistratesScepterBase {
  constructor (game) {
    super(game, "Magistrate's Scepter", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = MagistratesScepter;
