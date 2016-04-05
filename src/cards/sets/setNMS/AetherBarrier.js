"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Barrier", "Nemesis", "NMS");
  }
}

module.exports = AetherBarrier;
