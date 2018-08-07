"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snowfall extends UnimplementedCard {
  constructor (game) {
    super(game, "Snowfall", "Ice Age", "ICE");
  }
}

module.exports = Snowfall;
