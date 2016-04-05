"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleHulk extends UnimplementedCard {
  constructor(game) {
    super(game, "Tangle Hulk", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TangleHulk;
