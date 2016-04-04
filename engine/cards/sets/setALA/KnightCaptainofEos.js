"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightCaptainofEos extends Card {
  constructor(game) {
    super(game, "Knight-Captain of Eos", "Shards of Alara", "ALA");
  }
}

module.exports = KnightCaptainofEos;
