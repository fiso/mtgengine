"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindWarp extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Warp", "Magic Online Promos", "PRM");
  }
}

module.exports = MindWarp;
