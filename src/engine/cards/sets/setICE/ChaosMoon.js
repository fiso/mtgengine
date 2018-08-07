"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Moon", "Ice Age", "ICE");
  }
}

module.exports = ChaosMoon;
