"use strict";
const Constants = require ("../../../Constants");
const RiftElementalBase = require("../setMMA/RiftElemental");

class RiftElemental extends RiftElementalBase {
  constructor (game) {
    super(game, "Rift Elemental", "Future Sight", "FUT");
  }
}

module.exports = RiftElemental;
