"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blizzard extends UnimplementedCard {
  constructor(game) {
    super(game, "Blizzard", "Ice Age", "ICE");
  }
}

module.exports = Blizzard;
