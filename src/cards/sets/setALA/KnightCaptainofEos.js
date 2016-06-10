"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightCaptainofEos extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight-Captain of Eos", "Shards of Alara", "ALA");
  }
}

module.exports = KnightCaptainofEos;
