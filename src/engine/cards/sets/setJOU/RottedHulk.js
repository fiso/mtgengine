"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottedHulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Rotted Hulk", "Journey into Nyx", "JOU");
  }
}

module.exports = RottedHulk;
