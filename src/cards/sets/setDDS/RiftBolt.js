"use strict";
const Constants = require ("../../../Constants");
const RiftBoltBase = require("../setIMA/RiftBolt");

class RiftBolt extends RiftBoltBase {
  constructor (game) {
    super(game, "Rift Bolt", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RiftBolt;
