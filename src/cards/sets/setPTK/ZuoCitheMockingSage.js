"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZuoCitheMockingSage extends UnimplementedCard {
  constructor (game) {
    super(game, "Zuo Ci, the Mocking Sage", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZuoCitheMockingSage;
