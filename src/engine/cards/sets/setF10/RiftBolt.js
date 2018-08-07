"use strict";
const Constants = require ("../../../Constants");
const RiftBoltBase = require("../setIMA/RiftBolt");

class RiftBolt extends RiftBoltBase {
  constructor (game) {
    super(game, "Rift Bolt", "Friday Night Magic 2010", "F10");
  }
}

module.exports = RiftBolt;
