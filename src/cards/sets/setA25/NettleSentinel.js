"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettleSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Nettle Sentinel", "Masters 25", "A25");
  }
}

module.exports = NettleSentinel;
