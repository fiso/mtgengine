"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildslayerElves extends UnimplementedCard {
  constructor(game) {
    super(game, "Wildslayer Elves", "Shadowmoor", "SHM");
  }
}

module.exports = WildslayerElves;
