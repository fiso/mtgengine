"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcboundWorkerBase = require("../setDST/ArcboundWorker.js");

class ArcboundWorker extends ArcboundWorkerBase {
  constructor(game) {
    super(game, "Arcbound Worker", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundWorker;
