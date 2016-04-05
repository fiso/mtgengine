"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DustStalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Dust Stalker", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DustStalker;
