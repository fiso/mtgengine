"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HotSprings extends UnimplementedCard {
  constructor (game) {
    super(game, "Hot Springs", "Ice Age", "ICE");
  }
}

module.exports = HotSprings;
