"use strict";
const Constants = require ("../../../Constants");
const ArcboundWorkerBase = require("../setDST/ArcboundWorker");

class ArcboundWorker extends ArcboundWorkerBase {
  constructor (game) {
    super(game, "Arcbound Worker", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundWorker;
