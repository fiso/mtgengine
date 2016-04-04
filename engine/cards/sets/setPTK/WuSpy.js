"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuSpy extends UnimplementedCard {
  constructor(game) {
    super(game, "Wu Spy", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuSpy;
