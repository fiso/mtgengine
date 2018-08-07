"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Somnomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Somnomancer", "Shadowmoor", "SHM");
  }
}

module.exports = Somnomancer;
