"use strict";
const Constants = require ("../../../Constants");
const ArcboundWorkerBase = require("../setMMA/ArcboundWorker");

class ArcboundWorker extends ArcboundWorkerBase {
  constructor (game) {
    super(game, "Arcbound Worker", "Darksteel", "DST");
  }
}

module.exports = ArcboundWorker;
