"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gigantomancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Gigantomancer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Gigantomancer;
