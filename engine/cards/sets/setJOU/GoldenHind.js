"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldenHind extends UnimplementedCard {
  constructor(game) {
    super(game, "Golden Hind", "Journey into Nyx", "JOU");
  }
}

module.exports = GoldenHind;
