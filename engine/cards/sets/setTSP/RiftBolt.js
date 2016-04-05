"use strict";
const Constants = require ("../../../Constants");
const RiftBoltBase = require("../setpFNM/RiftBolt");

class RiftBolt extends RiftBoltBase {
  constructor(game) {
    super(game, "Rift Bolt", "Time Spiral", "TSP");
  }
}

module.exports = RiftBolt;
