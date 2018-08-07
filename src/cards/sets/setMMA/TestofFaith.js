"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TestofFaith extends UnimplementedCard {
  constructor (game) {
    super(game, "Test of Faith", "Modern Masters", "MMA");
  }
}

module.exports = TestofFaith;
