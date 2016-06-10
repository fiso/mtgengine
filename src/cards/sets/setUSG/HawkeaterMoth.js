"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HawkeaterMoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Hawkeater Moth", "Urza's Saga", "USG");
  }
}

module.exports = HawkeaterMoth;
