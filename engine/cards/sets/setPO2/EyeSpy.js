"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeSpy extends UnimplementedCard {
  constructor(game) {
    super(game, "Eye Spy", "Portal Second Age", "PO2");
  }
}

module.exports = EyeSpy;
