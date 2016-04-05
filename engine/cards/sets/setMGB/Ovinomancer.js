"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ovinomancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Ovinomancer", "Multiverse Gift Box", "MGB");
  }
}

module.exports = Ovinomancer;
