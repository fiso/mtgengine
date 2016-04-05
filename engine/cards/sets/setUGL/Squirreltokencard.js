"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squirreltokencard extends UnimplementedCard {
  constructor(game) {
    super(game, "Squirrel token card", "Unglued", "UGL");
  }
}

module.exports = Squirreltokencard;
