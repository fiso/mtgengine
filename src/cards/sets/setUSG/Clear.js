"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clear extends UnimplementedCard {
  constructor(game) {
    super(game, "Clear", "Urza's Saga", "USG");
  }
}

module.exports = Clear;
