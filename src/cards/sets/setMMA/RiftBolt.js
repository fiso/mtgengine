"use strict";
const Constants = require ("../../../Constants");
const RiftBoltBase = require("../setpFNM/RiftBolt");

class RiftBolt extends RiftBoltBase {
  constructor (game) {
    super(game, "Rift Bolt", "Modern Masters", "MMA");
  }
}

module.exports = RiftBolt;
