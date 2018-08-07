"use strict";
const Constants = require ("../../../Constants");
const SpiritoftheHuntBase = require("../setEMN/SpiritoftheHunt");

class SpiritoftheHunt extends SpiritoftheHuntBase {
  constructor (game) {
    super(game, "Spirit of the Hunt", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SpiritoftheHunt;
