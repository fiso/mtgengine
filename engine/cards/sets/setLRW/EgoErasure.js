"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EgoErasure extends Card {
  constructor(game) {
    super(game, "Ego Erasure", "Lorwyn", "LRW");
  }
}

module.exports = EgoErasure;
