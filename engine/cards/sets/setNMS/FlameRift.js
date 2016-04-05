"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameRift extends UnimplementedCard {
  constructor(game) {
    super(game, "Flame Rift", "Nemesis", "NMS");
  }
}

module.exports = FlameRift;
