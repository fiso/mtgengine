"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpyNetwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Spy Network", "Onslaught", "ONS");
  }
}

module.exports = SpyNetwork;
