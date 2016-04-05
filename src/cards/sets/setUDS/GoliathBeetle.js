"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoliathBeetle extends UnimplementedCard {
  constructor(game) {
    super(game, "Goliath Beetle", "Urza's Destiny", "UDS");
  }
}

module.exports = GoliathBeetle;
