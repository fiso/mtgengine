"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BodySnatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Body Snatcher", "Urza's Destiny", "UDS");
  }
}

module.exports = BodySnatcher;
