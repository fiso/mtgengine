"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiftBolt extends Card {
  constructor(game) {
    super(game, "Rift Bolt", "Friday Night Magic", "pFNM");
  }
}

module.exports = RiftBolt;
