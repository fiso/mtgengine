"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiftmarkedKnight extends UnimplementedCard {
  constructor(game) {
    super(game, "Riftmarked Knight", "Planar Chaos", "PLC");
  }
}

module.exports = RiftmarkedKnight;
