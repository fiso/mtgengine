"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlueScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "Blue Scarab", "Ice Age", "ICE");
  }
}

module.exports = BlueScarab;
