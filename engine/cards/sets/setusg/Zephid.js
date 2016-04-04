"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zephid extends UnimplementedCard {
  constructor(game) {
    super(game, "Zephid", "Urza's Saga", "USG");
  }
}

module.exports = Zephid;
