"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZuoCitheMockingSage extends UnimplementedCard {
  constructor (game) {
    super(game, "Zuo Ci, the Mocking Sage", "You Make the Cube", "PZ2");
  }
}

module.exports = ZuoCitheMockingSage;
