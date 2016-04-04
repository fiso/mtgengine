"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stonehands extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonehands", "Ice Age", "ICE");
  }
}

module.exports = Stonehands;
