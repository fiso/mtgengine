"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiftBoltBase = require("../setpFNM/RiftBolt.js");

class RiftBolt extends RiftBoltBase {
  constructor(game) {
    super(game, "Rift Bolt", "Modern Masters", "MMA");
  }
}

module.exports = RiftBolt;
