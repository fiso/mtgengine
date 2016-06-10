"use strict";
const Constants = require ("../../../Constants");
const RiftElementalBase = require("../setFUT/RiftElemental");

class RiftElemental extends RiftElementalBase {
  constructor (game) {
    super(game, "Rift Elemental", "Modern Masters", "MMA");
  }
}

module.exports = RiftElemental;
