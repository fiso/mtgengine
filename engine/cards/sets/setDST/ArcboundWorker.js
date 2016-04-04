"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcboundWorker extends Card {
  constructor(game) {
    super(game, "Arcbound Worker", "Darksteel", "DST");
  }
}

module.exports = ArcboundWorker;
