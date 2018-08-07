"use strict";
const Constants = require ("../../../Constants");
const FortunesFavorBase = require("../setF17/FortunesFavor");

class FortunesFavor extends FortunesFavorBase {
  constructor (game) {
    super(game, "Fortune's Favor", "Magic Online Promos", "PRM");
  }
}

module.exports = FortunesFavor;
