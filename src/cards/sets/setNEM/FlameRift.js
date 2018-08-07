"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameRift extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Rift", "Nemesis", "NEM");
  }
}

module.exports = FlameRift;
