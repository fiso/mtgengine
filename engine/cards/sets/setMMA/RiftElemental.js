"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiftElementalBase = require("../setFUT/RiftElemental.js");

class RiftElemental extends RiftElementalBase {
  constructor(game) {
    super(game, "Rift Elemental", "Modern Masters", "MMA");
  }
}

module.exports = RiftElemental;
