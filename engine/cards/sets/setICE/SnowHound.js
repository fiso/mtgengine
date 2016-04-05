"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowHound extends UnimplementedCard {
  constructor(game) {
    super(game, "Snow Hound", "Ice Age", "ICE");
  }
}

module.exports = SnowHound;
