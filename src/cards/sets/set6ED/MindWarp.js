"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindWarp extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Warp", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MindWarp;
