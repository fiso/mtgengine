"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfiniteAuthority extends UnimplementedCard {
  constructor(game) {
    super(game, "Infinite Authority", "Legends", "LEG");
  }
}

module.exports = InfiniteAuthority;
