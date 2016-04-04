"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TestamentofFaith extends UnimplementedCard {
  constructor(game) {
    super(game, "Testament of Faith", "Odyssey", "ODY");
  }
}

module.exports = TestamentofFaith;
