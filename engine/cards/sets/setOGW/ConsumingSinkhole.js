"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumingSinkhole extends Card {
  constructor(game) {
    super(game, "Consuming Sinkhole", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ConsumingSinkhole;
