"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfiniteAuthority extends Card {
  constructor(game) {
    super(game, "Infinite Authority", "Legends", "LEG");
  }
}

module.exports = InfiniteAuthority;
