"use strict";
const Constants = require ("../../../Constants");
const RiftBoltBase = require("../setIMA/RiftBolt");

class RiftBolt extends RiftBoltBase {
  constructor (game) {
    super(game, "Rift Bolt", "Magic Online Promos", "PRM");
  }
}

module.exports = RiftBolt;
