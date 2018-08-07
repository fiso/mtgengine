"use strict";
const Constants = require ("../../../Constants");
const SultaiCharmBase = require("../setKTK/SultaiCharm");

class SultaiCharm extends SultaiCharmBase {
  constructor (game) {
    super(game, "Sultai Charm", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = SultaiCharm;
