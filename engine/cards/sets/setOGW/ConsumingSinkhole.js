"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingSinkhole extends UnimplementedCard {
  constructor(game) {
    super(game, "Consuming Sinkhole", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ConsumingSinkhole;
