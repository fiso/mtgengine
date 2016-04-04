"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TestofFaith extends UnimplementedCard {
  constructor(game) {
    super(game, "Test of Faith", "Darksteel", "DST");
  }
}

module.exports = TestofFaith;
