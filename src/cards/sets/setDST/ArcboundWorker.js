"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundWorker extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Worker", "Darksteel", "DST");
  }
}

module.exports = ArcboundWorker;
