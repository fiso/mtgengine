"use strict";
const Constants = require ("../../../Constants");
const SoulSeparatorBase = require("../setEMN/SoulSeparator");

class SoulSeparator extends SoulSeparatorBase {
  constructor (game) {
    super(game, "Soul Separator", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SoulSeparator;
