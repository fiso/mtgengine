"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcumsSleigh extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcum's Sleigh", "Ice Age", "ICE");
  }
}

module.exports = ArcumsSleigh;
