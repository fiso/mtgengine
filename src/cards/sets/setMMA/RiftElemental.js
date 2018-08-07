"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiftElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Rift Elemental", "Modern Masters", "MMA");
  }
}

module.exports = RiftElemental;
