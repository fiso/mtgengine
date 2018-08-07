"use strict";
const Constants = require ("../../../Constants");
const SultaiCharmBase = require("../setKTK/SultaiCharm");

class SultaiCharm extends SultaiCharmBase {
  constructor (game) {
    super(game, "Sultai Charm", "Magic Online Promos", "PRM");
  }
}

module.exports = SultaiCharm;
