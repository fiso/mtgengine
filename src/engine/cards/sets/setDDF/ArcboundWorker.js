"use strict";
const Constants = require ("../../../Constants");
const ArcboundWorkerBase = require("../setMMA/ArcboundWorker");

class ArcboundWorker extends ArcboundWorkerBase {
  constructor (game) {
    super(game, "Arcbound Worker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ArcboundWorker;
