"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiftElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Rift Elemental", "Future Sight", "FUT");
  }
}

module.exports = RiftElemental;
