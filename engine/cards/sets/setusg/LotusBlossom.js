"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LotusBlossom extends Card {
  constructor(game) {
    super(game, "Lotus Blossom", "Urza's Saga", "USG");
  }
}

module.exports = LotusBlossom;
