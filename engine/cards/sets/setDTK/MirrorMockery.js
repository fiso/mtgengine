"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorMockery extends Card {
  constructor(game) {
    super(game, "Mirror Mockery", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MirrorMockery;
