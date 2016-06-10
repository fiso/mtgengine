"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnacksawClique extends UnimplementedCard {
  constructor (game) {
    super(game, "Knacksaw Clique", "Shadowmoor", "SHM");
  }
}

module.exports = KnacksawClique;
