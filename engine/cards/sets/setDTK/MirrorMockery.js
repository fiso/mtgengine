"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorMockery extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Mockery", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MirrorMockery;
