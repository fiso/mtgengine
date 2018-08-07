"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundWorker extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Worker", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundWorker;
