"use strict";
const Constants = require ("../../../Constants");
const ArcboundWorkerBase = require("../setMMA/ArcboundWorker");

class ArcboundWorker extends ArcboundWorkerBase {
  constructor (game) {
    super(game, "Arcbound Worker", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ArcboundWorker;
