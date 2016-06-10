"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiftBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Rift Bolt", "Friday Night Magic", "pFNM");
  }
}

module.exports = RiftBolt;
